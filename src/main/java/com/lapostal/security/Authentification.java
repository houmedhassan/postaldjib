package com.lapostal.security;

import java.util.HashSet;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lapostal.security.entities.LoginForm;
import com.lapostal.security.entities.RoleName;
import com.lapostal.security.entities.RoleUser;
import com.lapostal.security.entities.User;
import com.lapostal.security.jwt.JwtProvider;
import com.lapostal.security.jwt.JwtResponse;
import com.lapostal.security.repository.RoleRepository;
import com.lapostal.security.repository.UserHistoryRepository;
import com.lapostal.security.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 360)
@RestController
@RequestMapping(value="authentification/api")
public class Authentification {

	  @Autowired
	  AuthenticationManager authenticationManager;
	 
	  @Autowired
	  UserRepository userRepository;
	 
	  @Autowired
	  RoleRepository roleRepository;
	  
	  @Autowired
	  UserHistoryRepository userHistoryRepository;
	 
	  @Autowired
	  PasswordEncoder encoder;
	 
	  @Autowired
	  JwtProvider jwtProvider;
	  
	  
	  @PostMapping("/signin")
	  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {
	 
		  System.out.println("**************** je suis ciiiiii ************** ");
	    Authentication authentication = authenticationManager.authenticate(
	        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
	 
	    SecurityContextHolder.getContext().setAuthentication(authentication);
	 
	    String jwt = jwtProvider.generateJwtToken(authentication);
	    UserDetails userDetails = (UserDetails) authentication.getPrincipal();
	 
	    return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
	  }
	  
	  @GetMapping("/first/save")
		public ResponseEntity<String> save_users()
		{
			try {
					RoleUser role_msc = new RoleUser();
					role_msc.setName(RoleName.ROLE_ADMIN);
					roleRepository.save(role_msc);
					
					User user = new User(); 
					user.setName("ADMINISTRATEUR ");
					user.setUsername("Admin");
					user.setEmail("admin.postal@laposte.dj");
					 encoder = new BCryptPasswordEncoder(12);
					
					user.setPassword(encoder.encode("admin"));
					Set<RoleUser> rolesevergreen = new HashSet<RoleUser>();
					rolesevergreen.add(role_msc);
					user.setRoles(rolesevergreen);
					
					userRepository.save(user);	
				
				return new ResponseEntity<String>(HttpStatus.OK);
				
			}catch(Exception ex)
			{
				ex.printStackTrace();
				return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
			}
		}
}
