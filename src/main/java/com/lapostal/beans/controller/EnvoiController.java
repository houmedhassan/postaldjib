package com.lapostal.beans.controller;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
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

import com.lapostal.beans.ChartLineByMonthDTO;
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
	

	@GetMapping("/reference")
	public ResponseEntity<Envoi> findByReference(@RequestParam("reference") String reference, Principal principal)
	{
		try {
			return new ResponseEntity<Envoi>(envoiRepository.findByReference(reference), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<Envoi>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
	@GetMapping("/ems")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_EMS') or hasRole('ROLE_STAFF_ENVOI') ")
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
	@PreAuthorize("hasRole('ADMIN')  or hasRole('ROLE_STAFF_COLIS') or hasRole('ROLE_STAFF_ENVOI') ")
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
	@PreAuthorize("hasRole('ADMIN')  or hasRole('ROLE_STAFF_RECOMMANDE') or hasRole('ROLE_STAFF_ENVOI') ")
	public ResponseEntity<List<Envoi>> findAllRecommande(Principal principal)
	{
		try {
			return new ResponseEntity<List<Envoi>>(envoiRepository.findByTypeOrderByGkeyDesc("RECOMMANDE - RR"), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Envoi>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
	@GetMapping("/ordinaire")
	@PreAuthorize("hasRole('ADMIN')  or hasRole('ROLE_STAFF_ORDINAIRE') or hasRole('ROLE_STAFF_ENVOI') ")
	public ResponseEntity<List<Envoi>> findAllOrdinaire(Principal principal)
	{
		try {
			return new ResponseEntity<List<Envoi>>(envoiRepository.findByTypeOrderByGkeyDesc("ORDINAIRE"), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Envoi>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	@PostMapping("/save")
	@PreAuthorize("hasRole('ADMIN')  or hasRole('ROLE_STAFF_EMS') or hasRole('ROLE_STAFF_COLIS') or hasRole('ROLE_STAFF_RECOMMANDE') or hasRole('ROLE_STAFF_ORDINAIRE')  or hasRole('ROLE_STAFF_ENVOI')")
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
			envoi.setColor(type.getColor());
			
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
	@PreAuthorize("hasRole('ADMIN')  or hasRole('ROLE_STAFF_EMS') or hasRole('ROLE_STAFF_COLIS') or hasRole('ROLE_STAFF_RECOMMANDE') or hasRole('ROLE_STAFF_ORDINAIRE')  or hasRole('ROLE_STAFF_ENVOI')")
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
	@PreAuthorize("hasRole('ADMIN')  or hasRole('ROLE_STAFF_EMS') or hasRole('ROLE_STAFF_COLIS') or hasRole('ROLE_STAFF_RECOMMANDE') or hasRole('ROLE_STAFF_ORDINAIRE')  or hasRole('ROLE_STAFF_ENVOI')")
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
	public ResponseEntity<List<JSONObject>> tableaudebord1()
	{
		try {
			return new ResponseEntity<List<JSONObject>>(envoiRepository.tableaudebord(), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<JSONObject>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
	@GetMapping("/tableau/bord2")
	public ResponseEntity<Map<String, List<ChartLineByMonthDTO>>> tableaudebord2()
	{
		try {
			Map<String, List<ChartLineByMonthDTO>> envois = new HashMap<String, List<ChartLineByMonthDTO>>();
			
			for(TypeArticle article : typearticleRepository.findAll())
			{
				//envois.put(article.getName(), charts);
			
			
			
			List<ChartLineByMonthDTO> charts = new ArrayList<ChartLineByMonthDTO>();
			
				for(int i =1; i<=12; i++)
				{
				 ChartLineByMonthDTO month = new  ChartLineByMonthDTO();
				 
				 switch (i) {
					 case 1:
						 month.setMonthname("JANVIER");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
		
					 case 2:
						 month.setMonthname("FEVRIER");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 case 3:
						 month.setMonthname("MARS");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 case 4:
						 month.setMonthname("AVRIL");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 case 5:
						 month.setMonthname("MAI");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 case 6:
						 month.setMonthname("JUIN");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 case 7:
						 month.setMonthname("JUILLET");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 case 8:
						 month.setMonthname("AOUT");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 case 9:
						 month.setMonthname("SEPTEMBRE");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 case 10:
						 month.setMonthname("OCTOBRE");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 case 11:
						 month.setMonthname("NOVEMBRE");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 case 12:
						 month.setMonthname("DECEMBRE");
						 month.setValue(0);
						 month.setIndex(0);
						 month.setColor(article.getColor());
						break;
					 default:
						break;
				  }
				 
				 //charts.add(month);	

				envois.computeIfAbsent(article.getName(),  k -> new ArrayList<>()).add(month);
				 
				}
			}

			/**
			 * Recupration de la liste par mois
			 */
			
			for(JSONObject json : envoiRepository.tableaudebord2())
			{
				
				List<ChartLineByMonthDTO> chart =  new ArrayList<ChartLineByMonthDTO>();
						chart = envois.get(json.get("type").toString());				
						
					System.out.println(chart.get(Integer.parseInt(json.get("updatedat").toString())-1));
					
				ChartLineByMonthDTO month = new ChartLineByMonthDTO();
				month = chart.get(Integer.parseInt(json.get("updatedat").toString())-1);	
				month.setValue(Integer.parseInt(json.get("COUNT").toString()));
				month.setColor((json.get("color") == null) ? "#0000":json.get("color").toString());
				
				chart.set(Integer.parseInt(json.get("updatedat").toString())-1, month);	

				envois.replace(json.get("type").toString(), chart);	
				
				System.out.println(" ****** "+chart.get(9).getMonthname() + " ******* "+chart.get(9).getValue());
				
			}
			
			
			for(Entry<String, List<ChartLineByMonthDTO>> envoi : envois.entrySet())
			{
				for(ChartLineByMonthDTO chart : envoi.getValue())
				{
					System.out.println(" ****** "+chart.getMonthname() + " ******* "+chart.getValue());
				}
			}
						
			return new ResponseEntity<Map<String, List<ChartLineByMonthDTO>>>(envois, HttpStatus.OK);
		}catch(Exception ex)
		{		
			//ex.printStackTrace();
			return new ResponseEntity<Map<String, List<ChartLineByMonthDTO>>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
}
