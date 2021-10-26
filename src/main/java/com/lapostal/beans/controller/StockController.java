package com.lapostal.beans.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lapostal.beans.Reception;
import com.lapostal.beans.ReceptionRepository;
import com.lapostal.beans.TypeReceptionRepository;
import com.lapostal.security.repository.UserRepository;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/api/postal/reception/stock")
public class StockController {
	
	
		
		@Autowired
		TypeReceptionRepository typeReceptionRepository;
		
		@Autowired
		ReceptionRepository receptionRepository;
		
		@Autowired
		UserRepository userRepository;
		
		/**
		 * 
		 * @param principal
		 * @return
		 */
		@GetMapping("/all")
		@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
		public ResponseEntity<List<Reception>> findAll(Principal principal)
		{
			try {
				
				System.out.println(receptionRepository.findByDatesortieIsNullAndDommageFalse().size());
				return new ResponseEntity<List<Reception>>(receptionRepository.findByDatesortieIsNullAndDommageFalse(), HttpStatus.OK);
			}catch(Exception ex)
			{			
				return new ResponseEntity<List<Reception>>(HttpStatus.FORBIDDEN);
			}	
			
		}
		
		@GetMapping("/defaillant/all")
		@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
		public ResponseEntity<List<Reception>> findAllDefaillant(Principal principal)
		{
			try {
				
				System.out.println(receptionRepository.findByDatesortieIsNullAndDommageFalse().size());
				return new ResponseEntity<List<Reception>>(receptionRepository.findByDatesortieIsNullAndDommageTrue(), HttpStatus.OK);
			}catch(Exception ex)
			{			
				return new ResponseEntity<List<Reception>>(HttpStatus.FORBIDDEN);
			}	
			
		}

		
		/**
		 * 
		 * @param principal
		 * @return
		 */
		@GetMapping("/recherche")
		@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
		public ResponseEntity<List<String>> recherche(@RequestParam("param") String param, Principal principal)
		{
			try {			
				
				System.out.println(param);
				List<String> strings = new ArrayList<String>();
				
				for(Reception r : receptionRepository.findByReferenceContaining(param))
				{
					
					strings.add(r.getReference());
					
				}
				
				return new ResponseEntity<List<String>>(strings, HttpStatus.OK);
			}catch(Exception ex)
			{			
				return new ResponseEntity<List<String>>(HttpStatus.FORBIDDEN);
			}	
			
		}
		
		
		/**
		 * 
		 * @param principal
		 * @return
		 */
		@GetMapping("/recherche/livraison")
		@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
		public ResponseEntity<List<String>> recherchelivraison(@RequestParam("param") String param, Principal principal)
		{
			try {			
				
				System.out.println(param);
				List<String> strings = new ArrayList<String>();
				
				for(Reception r : receptionRepository.findByReferenceContainingAndDatesortieIsNull(param))
				{
					
					strings.add(r.getReference());
					
				}
				
				return new ResponseEntity<List<String>>(strings, HttpStatus.OK);
			}catch(Exception ex)
			{			
				return new ResponseEntity<List<String>>(HttpStatus.FORBIDDEN);
			}	
			
		}
		
		/**
		 * 
		 * @param principal
		 * @return
		 */
		@GetMapping("/recherche/resultat")
		@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
		public ResponseEntity<Reception> resultat(@RequestParam("param") String param, Principal principal)
		{
			try {			
							
				return new ResponseEntity<Reception>(receptionRepository.findByReference(param), HttpStatus.OK);
			}catch(Exception ex)
			{			
				return new ResponseEntity<Reception>(HttpStatus.FORBIDDEN);
			}	
			
		}
		
		
}
