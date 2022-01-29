package com.lapostal.beans.controller;

import java.security.Principal;
import java.text.DateFormatSymbols;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

import com.lapostal.beans.TypeVente;
import com.lapostal.beans.TypeVenteItems;
import com.lapostal.beans.TypeVenteItemsRepository;
import com.lapostal.beans.TypeVenteRepository;
import com.lapostal.beans.Vente;
import com.lapostal.beans.VenteRepository;
import com.lapostal.beans.dto.ListeVenteDTO;
import com.lapostal.beans.dto.RapportsVenteDTO;
import com.lapostal.beans.dto.VenteEnteteDTO;
import com.lapostal.beans.dto.rapportVenteForm;
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
	@PreAuthorize("hasRole('ADMIN')")
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
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_RECETTE')")
	public ResponseEntity<String> savevente(@RequestBody Vente ventes, Principal principal)
	{
		try {
			
			
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
			vente.setTypepaiement(ventes.getTypepaiement());
			
			vente.setAnnee(vente.getDatevente().getYear());
			vente.setMonth(vente.getDatevente().getMonthValue());
			
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
	@PreAuthorize("hasRole('ADMIN')")
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
	public ResponseEntity<List<Vente>> FindSaleByDay(Principal principal)
	{
		try {
			return new ResponseEntity<List<Vente>>(venteRepository.findByDateventeOrderByIdDesc(LocalDate.now()), HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Vente>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	String getMonthForInt(int num) {
	    String month = "wrong";
	    DateFormatSymbols dfs = new DateFormatSymbols();
	    String[] months = dfs.getMonths();
	    
	    if (num >= 0 && num <= 11) {
	        month = months[num];
	    }
	    return month;
	}
	
	/**
	 * 
	 * @param principal
	 * @return
	 */
	@PostMapping("/rapports")
	public ResponseEntity<List<RapportsVenteDTO> > rapports(@RequestBody rapportVenteForm rapportForm, Principal principal)
	{
		try {
			
			System.out.println(rapportForm.getDatedebut()+ " "+rapportForm.getDatefin());
			
			List<RapportsVenteDTO> rapportsventes = new ArrayList<RapportsVenteDTO>();
			List<String> entete = new ArrayList<String>();
			entete.add("DATE");
			List<Integer> ints = new ArrayList<Integer>();
			/**
			 * 
			 */
			for(TypeVente vente : typeVenteRepository.findAll())
			{
				if(vente.getItems().size() >0 )
				{
					for(TypeVenteItems item : vente.getItems())
					{
						entete.add(item.getNom());
						ints.add(100+item.getIditems());
					}
				}else {
					entete.add(vente.getNom());
					ints.add(vente.getId());
				}				
			}
			entete.add("TOTAL");
			
			int year = 0;
			LocalDate startmonth =rapportForm.getDatedebut();
			LocalDate lastmonth = rapportForm.getDatefin();
		
			
			/**
			 * 
			 */
			System.out.println(startmonth.getMonthValue()<= lastmonth.getMonthValue());
			while(startmonth.isBefore(lastmonth) )
			{
				int i = startmonth.getMonthValue();
				
						RapportsVenteDTO vente = new RapportsVenteDTO();
						int j =i;
						vente.setMonth(getMonthForInt(j-1).toUpperCase());
						vente.setEntete(entete);
										
						
						List<ListeVenteDTO> ventesdto = new ArrayList<ListeVenteDTO>();
						
						
						LocalDate initial = LocalDate.of(startmonth.getYear(), i, 1);	
						
						YearMonth month = YearMonth.from(initial);
						LocalDate start = month.atDay(1);
						LocalDate end   = month.atEndOfMonth();
						
						System.out.println(initial.getMonthValue()+"*******"+month+" **** start month "+start.getMonthValue()+" **** end month "+end.getMonthValue());
						
						List<Vente> ventes = venteRepository.findByAnneeAndMonthOrderByItemstypevente(initial.getYear(), initial.getMonthValue());
						
						startmonth = startmonth.plusMonths(1);
						/**
						 *  En recupere tout le date 				
						 */
						while(start.isBefore(end) || start.isEqual(end))
						{
							int somme =0;
							
							List<String> dates = new ArrayList<String>();
							VenteEnteteDTO venteentete = new VenteEnteteDTO();	
							
							dates.add(start.toString());
							LocalDate now = start; 	
							ListeVenteDTO dto = new ListeVenteDTO();
							dto.setDate(now.toString());
							
							List<Vente> vs = ventes.stream().filter(vte->now.equals(vte.getDatevente() )).collect(Collectors.toList());			
							List<String> values = new ArrayList<String>();
							start = start.plusDays(1);
							int index=0;
							for(String ent : entete)
							{
								if(index >0 && index<entete.size()-1)
								{
									boolean trouve=false;
									for(Vente v: vs)
									{
										
										 if(ent.equals(v.getNom()) && now.equals(v.getDatevente()))
										{
											trouve=true;
											
											values.add((v.getPrix()+v.getPenalite())+"");
											somme+=(v.getPrix()+v.getPenalite());
										}
									}
									
									if(!trouve)
									{
										values.add((0)+"");
									}
								}
								index++;
							}
							
							values.add(somme+"");					
							dto.setVentes(values);					
							ventesdto.add(dto);
						}
						vente.setVentes(ventesdto);
						rapportsventes.add(vente);	
					}

			
			
			/**
			 * Recuperer la liste des ventes effectué cette année
			 */			
			return new ResponseEntity<List<RapportsVenteDTO> >(rapportsventes, HttpStatus.OK);
		}catch(Exception ex)
		{			
			ex.printStackTrace();
			return new ResponseEntity<List<RapportsVenteDTO>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	
	
	
	
}
