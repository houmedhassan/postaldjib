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

import com.lapostal.beans.Livraison;
import com.lapostal.beans.LivraisonRepository;
import com.lapostal.beans.Pays;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/api/postal/livraison")
public class LivraisonController {
	
	
	@Autowired
	LivraisonRepository livraisonRepository;
	

	/**
	 * 
	 * @param principal
	 * @return
	 */
	@GetMapping("/all")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Livraison>> findAll(Principal principal)
	{
		try {
			return new ResponseEntity<List<Livraison>>(livraisonRepository.findAll(), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Livraison>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	/**
	 * 
	 * @param principal
	 * @return
	 */
	@GetMapping("/success")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Livraison>> findAllSucces(Principal principal)
	{
		try {
			System.out.println(" je susi icii ");
			return new ResponseEntity<List<Livraison>>(livraisonRepository.findByEtat("SUCCESS"), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Livraison>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	/**
	 * 
	 * @param principal
	 * @return
	 */
	@GetMapping("/echec")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Livraison>> findAllEchec(Principal principal)
	{
		try {
			System.out.println(" je susi icii ");
			return new ResponseEntity<List<Livraison>>(livraisonRepository.findByEtat("ECHEC"), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Livraison>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	

}
