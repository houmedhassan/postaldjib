package com.lapostal.beans.controller;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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

import com.lapostal.beans.AlarmeAnomalie;
import com.lapostal.beans.AlarmeAnomalieRepository;
import com.lapostal.beans.AlarmeEnum;
import com.lapostal.beans.Livraison;
import com.lapostal.beans.LivraisonRepository;
import com.lapostal.beans.Pays;
import com.lapostal.beans.PaysRepository;
import com.lapostal.beans.Reception;
import com.lapostal.beans.ReceptionHistorique;
import com.lapostal.beans.ReceptionHistoriqueRepository;
import com.lapostal.beans.ReceptionRepository;
import com.lapostal.beans.TypeReception;
import com.lapostal.beans.TypeReceptionRepository;
import com.lapostal.beans.dto.LivraisonEchoueDTO;
import com.lapostal.beans.dto.ReceptionDTO;
import com.lapostal.security.entities.User;
import com.lapostal.security.repository.UserRepository;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/api/postal/reception")
public class ReceptionController {
	
	
	@Autowired
	TypeReceptionRepository typeReceptionRepository;
	
	@Autowired
	ReceptionRepository receptionRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	ReceptionHistoriqueRepository receptionHistoriqueRepository;	
	
	@Autowired
	PaysRepository paysRepository;
	
	@Autowired
	AlarmeAnomalieRepository alarmeAnomalieRepository;
	
	@Autowired
	LivraisonRepository livraisonRepository;
	
	@GetMapping("/all")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Reception>> findAllReceptions(Principal principal)
	{
		try {
			return new ResponseEntity<List<Reception>>(receptionRepository.findAll(), HttpStatus.OK);
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
	@GetMapping("/pays/all")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Pays>> findAllPays(Principal principal)
	{
		try {
			System.out.println(" je susi icii ");
			return new ResponseEntity<List<Pays>>(paysRepository.findAll(), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Pays>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	/**
	 * 
	 * @param principal
	 * @return
	 */
	@GetMapping("/ems")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Reception>> findAll(Principal principal)
	{
		try {
			System.out.println(" je susi icii ");
			return new ResponseEntity<List<Reception>>(receptionRepository.findByTypeOrderByGkeyDesc("EMS - EE"), HttpStatus.OK);
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
	@GetMapping("/colis")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Reception>> findAllColis(Principal principal)
	{
		try {
			return new ResponseEntity<List<Reception>>(receptionRepository.findByTypeOrderByGkeyDesc("COLIS - CP"), HttpStatus.OK);
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
	@GetMapping("/recommande")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Reception>> findAllRecommande(Principal principal)
	{
		try {
			return new ResponseEntity<List<Reception>>(receptionRepository.findByTypeOrderByGkeyDesc("RECOMMANDE - RR"), HttpStatus.OK);
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
	@GetMapping("/ordinaire")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Reception>> findAllOrdinaire(Principal principal)
	{
		try {
			return new ResponseEntity<List<Reception>>(receptionRepository.findByTypeOrderByGkeyDesc("ORDINAIRE - N/A"), HttpStatus.OK);
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
	@GetMapping("/esuuq")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Reception>> findAllEsuuq(Principal principal)
	{
		try {
			return new ResponseEntity<List<Reception>>(receptionRepository.findByTypeOrderByGkeyDesc("ESUUQ"), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Reception>>(HttpStatus.FORBIDDEN);
		}	
		
	}

	@PostMapping("/save")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<String> saveEnvoi(@RequestBody ReceptionDTO envoidto, Principal principal)
	{
		try {
			
			Reception reception = new Reception();
			
			reception.setReference(envoidto.getReference());
			
			reception.setDatereception(envoidto.getDatereception());
			reception.setName(envoidto.getName());
			reception.setType(envoidto.getType());
			reception.setAdresse(envoidto.getAdresse());
			
			reception.setEmail(envoidto.getEmail());
			reception.setNomsender(envoidto.getNomsender());
			reception.setTelexpediteur(envoidto.getTelexpediteur());
			
			reception.setNamerecipient(envoidto.getNamerecipient());
			reception.setTelrecipient(envoidto.getTelrecipient());
			
		    reception.setDommage(envoidto.isDommage());		   
		    reception.setCommentaire(envoidto.getCommentaire());
			reception.setEnvoisms(envoidto.isEnvoisms());
			reception.setPaysexpediteur(envoidto.getPaysexpediteur());
			reception.setPaysrecipient(envoidto.getPaysrecipient());
			
			TypeReception type = typeReceptionRepository.findByName(envoidto.getTypearticle().getName());
			
			reception.setReception(type);
			
			Optional<User> user = userRepository.findByUsername(principal.getName()); 
			
			reception.setCreated(user.get());
			reception.setCreatedat(LocalDateTime.now());
			
			reception.setUpdated(user.get());
			reception.setUpdatedat(LocalDateTime.now());
			
			receptionRepository.save(reception);
			
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
			encoder.encode(reception.getGkey()+"");
			reception.setIdcrypt(encoder.encode(reception.getGkey()+""));
			
			receptionRepository.save(reception);
			
			
			ReceptionHistorique historique = new ReceptionHistorique();
			historique.setReference(reception.getReference());
			historique.setStatut("CREATION");
			historique.setArticle(type);
			
			historique.setCommentaire("Reception de l'article");
			historique.setCreated(user.get());
			historique.setCreatedat(LocalDateTime.now());
			
			receptionHistoriqueRepository.save(historique);
			
			if(reception.isDommage())
			{
				AlarmeAnomalie alarme = new AlarmeAnomalie();
				
				alarme.setReference(reception.getReference());
				alarme.setTypeAlarme("DOMMAGE");
				alarme.setCommentaire(reception.getCommentaire());
				alarme.setStatus(AlarmeEnum.SERVERITE.toString());
				
				alarme.setArticle(reception);
				alarme.setCreated(user.get());
				alarme.setCreatedat(LocalDateTime.now());
				
				alarmeAnomalieRepository.save(alarme);
				
			}
			
			if(reception.isEnvoisms())
			{
			
			}
			
			
			return new ResponseEntity<String>( HttpStatus.OK);
			
		}catch(Exception ex)
		{			
			ex.printStackTrace();
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}	
	}
	
	
	
	@GetMapping("/edit")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<Reception> findOne(@RequestParam("gkey") String gkey, Principal principal)
	{
		try {
			return new ResponseEntity<Reception>(receptionRepository.findByIdcrypt(gkey), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<Reception>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
	@PostMapping("/edit")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<String> editEnvoi(@RequestBody ReceptionDTO envoidto, @RequestParam("id") String id, Principal principal)
	{
		try {
			Reception reception = receptionRepository.findByIdcrypt(id);
			
			reception.setReference(envoidto.getReference());
			reception.setAdresse(envoidto.getAdresse());
			
			reception.setEmail(envoidto.getEmail());
			reception.setNomsender(envoidto.getNomsender());
			reception.setTelexpediteur(envoidto.getTelexpediteur());
			
			reception.setNamerecipient(envoidto.getNamerecipient());
			reception.setTelrecipient(envoidto.getTelrecipient());
			reception.setDatereception(envoidto.getDatereception());
			
			
		    reception.setDommage(envoidto.isDommage());		   
		    reception.setCommentaire(envoidto.getCommentaire());
			reception.setEnvoisms(envoidto.isEnvoisms());
			reception.setPaysexpediteur(envoidto.getPaysexpediteur());
			reception.setPaysrecipient(envoidto.getPaysrecipient());
			
			
			Optional<User> user = userRepository.findByUsername(principal.getName()); 
			
			
			reception.setUpdated(user.get());
			reception.setUpdatedat(LocalDateTime.now());
			
			receptionRepository.save(reception);
			
			ReceptionHistorique historique = new ReceptionHistorique();
			historique.setReference(reception.getReference());
			historique.setStatut("EDITION");
			historique.setArticle(reception.getReception());
			
			historique.setCommentaire("Mise de l'article reçu de l'article");
			historique.setCreated(user.get());
			historique.setCreatedat(LocalDateTime.now());

			
			receptionHistoriqueRepository.save(historique);
			
			
			if(reception.isDommage())
			{
				AlarmeAnomalie alarme = new AlarmeAnomalie();
				
				alarme.setReference(reception.getReference());
				alarme.setTypeAlarme("DOMMAGE");
				alarme.setCommentaire(reception.getCommentaire());
				alarme.setStatus(AlarmeEnum.SERVERITE.toString());
				
				alarme.setArticle(reception);
				alarme.setCreated(user.get());
				alarme.setCreatedat(LocalDateTime.now());
				
				alarmeAnomalieRepository.save(alarme);
				
			}

			
			return new ResponseEntity<String>( HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}	
	}
	
	
	@GetMapping("/historique")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<ReceptionHistorique>> findHistorique(@RequestParam("param") String param, Principal principal)
	{
		try {
			
			System.out.println(param);
			
			return new ResponseEntity<List<ReceptionHistorique>>(receptionHistoriqueRepository.findByReference(param), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<ReceptionHistorique>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
	
	@GetMapping("/alarme")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<AlarmeAnomalie>> findalarme(@RequestParam("param") String param, Principal principal)
	{
		try {
			return new ResponseEntity<List<AlarmeAnomalie>>(alarmeAnomalieRepository.findByReference(param), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<AlarmeAnomalie>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	

	
	@GetMapping("/livraison/sucess")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<String> livraison(@RequestParam("param") String param, Principal principal)
	{
		try {
			Optional<User> user = userRepository.findByUsername(principal.getName()); 
			
			Reception reception = receptionRepository.findByReference(param);
			reception.setDatesortie(LocalDate.now());
			
			reception.setEtat("LIVRÉ");
			reception.setUpdated(user.get());
			reception.setUpdatedat(LocalDateTime.now());
			
			Livraison livraison = livraisonRepository.findByReference(param);
			if(livraison == null)
			{
				livraison = new Livraison();

				livraison.setCreated(user.get());
				livraison.setCreatedat(LocalDateTime.now());
				
			}else {
				if(livraison.getEtat().equals("ECHEC"))
				{
					livraison.setEtatanterieur("ECHEC");
				}
				
				livraison.setUpdated(user.get());
				livraison.setUpdatedat(LocalDateTime.now());
			}
			
			livraison.setReference(param);
			livraison.setReception(reception);
			livraison.setEtat("SUCCESS");
			
			livraisonRepository.save(livraison);
			 			
			return new ResponseEntity<String>(HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
	
	@PostMapping("/livraison/echec")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<String> livraisonechoue(@RequestBody LivraisonEchoueDTO livraiondto, Principal principal)
	{
		try {
			
			Optional<User> user = userRepository.findByUsername(principal.getName()); 
			
			Reception reception = receptionRepository.findByReference(livraiondto.getParam());
			//reception.setDatesortie(LocalDate.now());
			
			reception.setEtat("RETOUR EN STOCK ");
			reception.setUpdated(user.get());
			reception.setUpdatedat(LocalDateTime.now());
			
			Livraison livraison = livraisonRepository.findByReference(livraiondto.getParam());
			if(livraison == null)
			{
				livraison = new Livraison();

				livraison.setCreated(user.get());
				livraison.setCreatedat(LocalDateTime.now());
				
			}else {
				if(livraison.getEtat().equals("ECHEC"))
				{
					livraison.setEtatanterieur("ECHEC");
				}
				
				livraison.setUpdated(user.get());
				livraison.setUpdatedat(LocalDateTime.now());
			}
			
			livraison.setReference(livraiondto.getParam());
			livraison.setReception(reception);
			livraison.setEtat("ECHEC");
			livraison.setCommentaire(livraiondto.getCommentaire());
			
			livraisonRepository.save(livraison);
			 			
			return new ResponseEntity<String>(HttpStatus.OK);
		}catch(Exception ex)
		{	
			ex.printStackTrace();
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
}
