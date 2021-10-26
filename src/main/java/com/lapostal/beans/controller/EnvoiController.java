package com.lapostal.beans.controller;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lapostal.beans.Envoi;
import com.lapostal.beans.EnvoiRepository;
import com.lapostal.beans.TypeArticle;
import com.lapostal.beans.TypeArticleRepository;
import com.lapostal.beans.dto.EnvoieDTO;
import com.lapostal.security.entities.User;
import com.lapostal.security.repository.UserRepository;



@RestController
@CrossOrigin("*")
@RequestMapping(value="/api/postal/envoi")
public class EnvoiController {
	
	
	 
	@Autowired
	private EnvoiRepository envoiRepository; 
	
	@Autowired
	private TypeArticleRepository typearticleRepository;
	
	@Autowired
	private UserRepository userRepository;
	

	
	@GetMapping("/ems")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Envoi>> findAll(Principal principal)
	{
		try {
			return new ResponseEntity<List<Envoi>>(envoiRepository.findByTypeOrderByGkeyDesc("EMS - EE"), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Envoi>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	@GetMapping("/colis")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Envoi>> findAllColis(Principal principal)
	{
		try {
			return new ResponseEntity<List<Envoi>>(envoiRepository.findByTypeOrderByGkeyDesc("COLIS - CP"), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Envoi>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
	@GetMapping("/recommande")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Envoi>> findAllRecommande(Principal principal)
	{
		try {
			return new ResponseEntity<List<Envoi>>(envoiRepository.findByTypeOrderByGkeyDesc("RECOMMANDE - RR"), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Envoi>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	@PostMapping("/save")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<String> saveEnvoi(@RequestBody EnvoieDTO envoidto, Principal principal)
	{
		try {
			
			Envoi envoi = new Envoi();
			
			envoi.setReference(envoidto.getReference());
			envoi.setName(envoidto.getName());
			envoi.setType(envoidto.getType());
			envoi.setAdresse(envoidto.getAdresse());
			
			envoi.setEmail(envoidto.getEmail());
			envoi.setNomsender(envoidto.getNomsender());
			envoi.setTelexpediteur(envoidto.getTelexpediteur());
			
			envoi.setNamerecipient(envoidto.getNamerecipient());
			envoi.setTelrecipient(envoidto.getTelrecipient());
			
			
			TypeArticle type = typearticleRepository.findByName(envoidto.getTypearticle().getName());
			
			envoi.setArticle(type);
			
			Optional<User> user = userRepository.findByUsername(principal.getName()); 
			
			envoi.setCreated(user.get());
			envoi.setCreatedat(LocalDateTime.now());
			
			envoi.setUpdated(user.get());
			envoi.setUpdatedat(LocalDateTime.now());
			
			envoiRepository.save(envoi);
			
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
			encoder.encode(envoi.getGkey()+"");
			envoi.setIdcrypt(encoder.encode(envoi.getGkey()+""));
			
			envoiRepository.save(envoi);
			
			return new ResponseEntity<String>( HttpStatus.OK);
			
		}catch(Exception ex)
		{			
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}	
	}
	
	
	
	@GetMapping("/edit")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<Envoi> findOne(@RequestParam("gkey") String gkey, Principal principal)
	{
		try {
			return new ResponseEntity<Envoi>(envoiRepository.findByIdcrypt(gkey), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<Envoi>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
	@PostMapping("/edit")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<String> editEnvoi(@RequestBody EnvoieDTO envoidto, @RequestParam("id") String id, Principal principal)
	{
		try {
			Envoi envoi = envoiRepository.findByIdcrypt(id);
			
			envoi.setReference(envoidto.getReference());
			envoi.setAdresse(envoidto.getAdresse());
			
			envoi.setEmail(envoidto.getEmail());
			envoi.setNomsender(envoidto.getNomsender());
			envoi.setTelexpediteur(envoidto.getTelexpediteur());
			
			envoi.setNamerecipient(envoidto.getNamerecipient());
			envoi.setTelrecipient(envoidto.getTelrecipient());
			
			
			Optional<User> user = userRepository.findByUsername(principal.getName()); 
			
			
			
			envoi.setUpdated(user.get());
			envoi.setUpdatedat(LocalDateTime.now());
			
			envoiRepository.save(envoi);
			

			
			return new ResponseEntity<String>( HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}	
	}
	
	

	
	@GetMapping("/tableau/bord1")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<JSONObject>> tableaudebord1()
	{
		try {
			return new ResponseEntity<List<JSONObject>>(envoiRepository.tableaudebord(), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<JSONObject>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
}
