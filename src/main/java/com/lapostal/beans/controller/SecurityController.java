package com.lapostal.beans.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lapostal.beans.dto.UserDTO;
import com.lapostal.security.entities.RoleUser;
import com.lapostal.security.entities.User;
import com.lapostal.security.repository.UserRepository;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/api/postal/security")
public class SecurityController {
	
	
	
	@Autowired
	private UserRepository userRepository;
	
	public ResponseEntity<String> saveUser(@RequestBody UserDTO user, Principal principal)
	{
		try {
			
			return new ResponseEntity<String>(HttpStatus.OK);
		}catch(Exception ex)
		{
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}
	}
	
	@GetMapping("/liste")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<UserDTO>> listUsers(Principal principal)
	{
		try {
			Optional<User> username = userRepository.findByUsername(principal.getName());
			/*
			if (username.get().getRoles().contains()) {
				
			}*/
			List<UserDTO> users = new ArrayList<UserDTO>();
			
			for(User user: userRepository.findAll())
			{
				UserDTO dto = new UserDTO();
				dto.setNom(user.getName());
				dto.setUsername(user.getUsername());				
				dto.setPassword(user.getPassword());
				
				List<String> roles = new ArrayList<String>();
				
				for(RoleUser role : user.getRoles()){
					
					roles.add(role.getName().name());
				}
				
				dto.setRole(roles);
					
				users.add(dto);
			}
			return new ResponseEntity<List<UserDTO>>(users, HttpStatus.OK);
		}catch(Exception ex)
		{
			return new ResponseEntity<List<UserDTO>>(HttpStatus.FORBIDDEN);
		}
	}
	

}
