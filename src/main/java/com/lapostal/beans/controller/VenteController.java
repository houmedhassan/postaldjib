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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lapostal.beans.Reception;
import com.lapostal.beans.TypeVente;
import com.lapostal.beans.TypeVenteItems;
import com.lapostal.beans.TypeVenteItemsRepository;
import com.lapostal.beans.TypeVenteRepository;
import com.lapostal.beans.Vente;
import com.lapostal.beans.VenteRepository;
import com.lapostal.security.entities.User;
import com.lapostal.security.repository.UserRepository;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/api/postal/vente")
public class VenteController {
	
	
	@Autowired
	TypeVenteRepository typeVenteRepository;
	
	@Autowired
	TypeVenteItemsRepository typeVenteItemsRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	VenteRepository venteRepository;
	
	
	
	@PostMapping("/parametrage/save")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<String> saveTypeVente(@RequestBody TypeVente ventes, Principal principal)
	{
		try {
			

			Optional<User> user = userRepository.findByUsername(principal.getName()); 
			TypeVente vente = new TypeVente();
			vente.setNom(ventes.getNom());
			vente.setPrix(ventes.getPrix());
			vente.setPenalite(ventes.getPenalite());
			
			vente.setCreated(user.get());
			vente.setCreatedat(LocalDateTime.now());
			
			vente.setUpdated(user.get());
			vente.setUpdatedat(LocalDateTime.now());
			
			typeVenteRepository.save(vente);
			
			for (TypeVenteItems item : ventes.getItems()) {
				
				TypeVenteItems venteitem = new TypeVenteItems();
				
				venteitem.setNom(item.getNom());
				venteitem.setPrix(item.getPrix());
				venteitem.setPenalite(item.getPenalite());
				//venteitem.setTypevente(item.getTypevente());
				venteitem.setTypevente(vente);
				venteitem.setCreated(user.get());
				venteitem.setCreatedat(LocalDateTime.now());				
				venteitem.setUpdated(user.get());
				venteitem.setUpdatedat(LocalDateTime.now());
				
				typeVenteItemsRepository.save(venteitem);
				
			}
			

			
			return new ResponseEntity<String>(HttpStatus.OK);
		}catch(Exception ex)
		{
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}
	}
	
	
	
	@PostMapping("/save")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<String> savevente(@RequestBody Vente ventes, Principal principal)
	{
		try {
			
			//System.out.println(ventes.getItemstypevente().getIditems());
			Optional<User> user = userRepository.findByUsername(principal.getName()); 
			
			Vente vente = new Vente();
			vente.setTypevente(ventes.getTypevente());
			if(ventes.getItemstypevente() != null)
			{
			vente.setItemstypevente(ventes.getItemstypevente());
			}
			vente.setDatevente(ventes.getDatevente());
			vente.setNom(ventes.getNom());
			vente.setPrix(ventes.getPrix());
			vente.setPenalite(ventes.getPenalite());
			vente.setPrixtotal(vente.getPrix()+vente.getPenalite());
			
			vente.setCreated(user.get());
			vente.setCreatedat(LocalDateTime.now());
			
			vente.setUpdated(user.get());
			vente.setUpdatedat(LocalDateTime.now());
			
			venteRepository.save(vente);
			

			
			return new ResponseEntity<String>(HttpStatus.OK);
		}catch(Exception ex)
		{
			ex.printStackTrace();
			return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
		}
	}
	
	
	
	
	
	@GetMapping("/parametrage/all")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<TypeVente>> findAllTypeVente(Principal principal)
	{
		try {
			return new ResponseEntity<List<TypeVente>>(typeVenteRepository.findAll(), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<TypeVente>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	/**
	 * 
	 * @param principal
	 * @return
	 */
	@GetMapping("/by/day")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_CONTROL') or hasRole('ROLE_STAFF_DLS') or hasRole('ROLE_STAFF_DLS')")
	public ResponseEntity<List<Vente>> FindSaleByDay(Principal principal)
	{
		try {
			return new ResponseEntity<List<Vente>>(venteRepository.findByDateventeOrderByIdDesc(LocalDate.now()), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Vente>>(HttpStatus.FORBIDDEN);
		}	
		
	}
}
