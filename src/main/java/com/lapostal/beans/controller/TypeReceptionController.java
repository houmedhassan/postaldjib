package com.lapostal.beans.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lapostal.beans.TypeReception;
import com.lapostal.beans.TypeReceptionRepository;
import com.lapostal.security.repository.UserRepository;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/api/postal/type/reception")
public class TypeReceptionController {
	
	
	@Autowired
	private TypeReceptionRepository typeReceptionRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	@GetMapping("/all")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<TypeReception>> findAll(Principal principal)
	{
		try {
			return new ResponseEntity<List<TypeReception>>(typeReceptionRepository.findAll(), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<TypeReception>>(HttpStatus.FORBIDDEN);
		}	
		
	}

}
