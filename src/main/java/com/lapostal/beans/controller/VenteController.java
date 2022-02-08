package com.lapostal.beans.controller;

import java.security.Principal;
import java.text.DateFormatSymbols;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Map.Entry;
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

import com.lapostal.beans.ChartLineByMonthDTO;
import com.lapostal.beans.TypeReception;
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
	
	
	@PostMapping("/tableau/bord")
	public ResponseEntity<List<Double>> tableaudebord2(@RequestBody rapportVenteForm rapportForm)
	{
		try {
			
			List<Double> listdata= new ArrayList<Double>();
			for(int i =0; i<12; i++)
			{
					listdata.add(0.0);
			}
			
			LocalDate startmonth =rapportForm.getDatedebut();
			LocalDate lastmonth = rapportForm.getDatefin();
		
			System.out.println("+++ +"+startmonth+" *** *** "+lastmonth);
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
				List<ListeVenteDTO> ventesdto = new ArrayList<ListeVenteDTO>();
						
						
				LocalDate initial = LocalDate.of(startmonth.getYear(), i, 1);	
						
				YearMonth month = YearMonth.from(initial);
				LocalDate start = month.atDay(1);
				LocalDate end   = month.atEndOfMonth();
						
				List<Vente> ventes = venteRepository.findByAnneeAndMonthOrderByItemstypevente(initial.getYear(), initial.getMonthValue());
						
				startmonth = startmonth.plusMonths(1);
				/**
				*  En recupere tout le date 				
				*/
				int somme =0;
				while(start.isBefore(end) || start.isEqual(end))
				{
					
							
					List<String> dates = new ArrayList<String>();
					VenteEnteteDTO venteentete = new VenteEnteteDTO();	
							
					dates.add(start.toString());
					LocalDate now = start; 	
					ListeVenteDTO dto = new ListeVenteDTO();
					dto.setDate(now.toString());
							
					List<Vente> vs = ventes.stream().filter(vte->now.equals(vte.getDatevente() )).collect(Collectors.toList());			
					List<String> values = new ArrayList<String>();
					start = start.plusDays(1);
					
					for(Vente v: vs)
					{							
						listdata.set(i-1, (listdata.get(i-1)+v.getPrix()+v.getPenalite()));							
					}
								
				}	
				
			}	
			
			for (int i = 0; i < listdata.size(); i++) {
				
				System.out.println( "somme  -- : "+listdata.get(i));
			}
			
				 
			return new ResponseEntity<List<Double>>(listdata, HttpStatus.OK);
		}catch(Exception ex)
		{			
			return new ResponseEntity<List<Double>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	

	
	@PostMapping("/tableau/bord/ventes")
	public ResponseEntity<Map<String, List<ChartLineByMonthDTO>>> tableaudebord(@RequestBody rapportVenteForm rapportForm)
	{
		try {
			
			Map<String, List<ChartLineByMonthDTO>> ventes = new HashMap<String, List<ChartLineByMonthDTO>>();
			
			for(TypeVente vente : typeVenteRepository.findAll())
			{
				List<ChartLineByMonthDTO> charts = new ArrayList<ChartLineByMonthDTO>();
			
				for(int i =1; i<=12; i++)
				{
				 ChartLineByMonthDTO month = new  ChartLineByMonthDTO();
				 
				 switch (i) {
					 case 1:
						 month.setMonthname("JANVIER");
						 month.setValue(0);
						 month.setIndex(0);
						// month.setColor(article.getColor());
						break;
		
					 case 2:
						 month.setMonthname("FEVRIER");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 case 3:
						 month.setMonthname("MARS");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 case 4:
						 month.setMonthname("AVRIL");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 case 5:
						 month.setMonthname("MAI");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 case 6:
						 month.setMonthname("JUIN");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 case 7:
						 month.setMonthname("JUILLET");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 case 8:
						 month.setMonthname("AOUT");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 case 9:
						 month.setMonthname("SEPTEMBRE");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 case 10:
						 month.setMonthname("OCTOBRE");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 case 11:
						 month.setMonthname("NOVEMBRE");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 case 12:
						 month.setMonthname("DECEMBRE");
						 month.setValue(0);
						 month.setIndex(0);
						 //month.setColor(article.getColor());
						break;
					 default:
						break;
				  }
				  ventes.computeIfAbsent(vente.getNom(),  k -> new ArrayList<>()).add(month);				 
				}
				
				
				List<Double> listdata= new ArrayList<Double>();
				for(int i =0; i<12; i++)
				{
						listdata.add(0.0);
				}
				
				LocalDate startmonth =rapportForm.getDatedebut();
				LocalDate lastmonth = rapportForm.getDatefin();
			
				System.out.println("+++ +"+startmonth+" *** *** "+lastmonth);
				/**
				 * 
				 */
				System.out.println(startmonth.getMonthValue()<= lastmonth.getMonthValue());
				while(startmonth.isBefore(lastmonth) )
				{
					int i = startmonth.getMonthValue();
					
					RapportsVenteDTO ventee = new RapportsVenteDTO();
					int j =i;
					ventee.setMonth(getMonthForInt(j-1).toUpperCase());
					List<ListeVenteDTO> ventesdto = new ArrayList<ListeVenteDTO>();
							
							
					LocalDate initial = LocalDate.of(startmonth.getYear(), i, 1);	
							
					YearMonth month = YearMonth.from(initial);
					LocalDate start = month.atDay(1);
					LocalDate end   = month.atEndOfMonth();
							
					List<Vente> ventees = venteRepository.findByAnneeAndMonthAndNomOrderByItemstypevente(initial.getYear(), initial.getMonthValue(), vente.getNom());
							
					startmonth = startmonth.plusMonths(1);
					/**
					*  En recupere tout le date 				
					*/
					int somme =0;
					while(start.isBefore(end) || start.isEqual(end))
					{
						
								
						List<String> dates = new ArrayList<String>();
						VenteEnteteDTO venteentete = new VenteEnteteDTO();	
								
						dates.add(start.toString());
						LocalDate now = start; 	
						ListeVenteDTO dto = new ListeVenteDTO();
						dto.setDate(now.toString());
								
						List<Vente> vs = ventees.stream().filter(vte->now.equals(vte.getDatevente() )).collect(Collectors.toList());			
						List<String> values = new ArrayList<String>();
						start = start.plusDays(1);
						
						for(Vente v: vs)
						{							
							listdata.set(i-1, (listdata.get(i-1)+v.getPrix()+v.getPenalite()));							
						}
									
					}	
					
				}
				
				
				for (int i = 0; i < listdata.size(); i++) {
					
					System.out.println(" month : -- "+i +"  --- vente : -- " + vente.getNom() +" -- somme  -- : "+listdata.get(i));
				}
				
				List<ChartLineByMonthDTO> months = ventes.get(vente.getNom());
				
				for(int i=0; i <listdata.size(); i++)
				{
					ChartLineByMonthDTO  dto = months.get(i);
					dto.setValue((int) Math.round( listdata.get(i)));
					dto.setColor(vente.getColor());
				}
				
				ventes.replace(vente.getNom(),  months);
				
			}

			
			for(Entry<String, List<ChartLineByMonthDTO>> vente : ventes.entrySet())
			{
				System.out.println(vente.getKey() + " ********** ");
				
				for(ChartLineByMonthDTO month : vente.getValue())
				{
					System.out.println(" ***** month ***** "+month.getMonthname()+ " *** value *** "+month.getValue());
				}
			}
				 
				return new ResponseEntity<Map<String, List<ChartLineByMonthDTO>>>(ventes, HttpStatus.OK);
		}catch(Exception ex)
		{			
			ex.printStackTrace();
			return new ResponseEntity<Map<String, List<ChartLineByMonthDTO>>>(HttpStatus.FORBIDDEN);
		}	
		
	}
	
	@GetMapping("/rapports/all")
	public ResponseEntity<List<Vente>> rapporventes()
	{
		try {
			
			
			return new ResponseEntity<List<Vente>>(venteRepository.findAll(), HttpStatus.OK);
		}catch(Exception ex)
		{			
			ex.printStackTrace();
			return new ResponseEntity<List<Vente>>(HttpStatus.FORBIDDEN);
		}	
	}
	
	
}
