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

import com.lapostal.beans.TypeArticle;
import com.lapostal.beans.TypeArticleRepository;
import com.lapostal.security.repository.UserRepository;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/api/postal/type/activite")
public class TypeActiviteController {

	
	@Autowired
	private TypeArticleRepository typearticleRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	
	 
	@GetMapping("/all")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<TypeArticle>> findAll(Principal principal)
	{
		try {
			return new ResponseEntity<List<TypeArticle>>(typearticleRepository.findAll(), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<TypeArticle>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
}
