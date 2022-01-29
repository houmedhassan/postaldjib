package com.lapostal.beans.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lapostal.beans.ChartLineByMonthDTO;
import com.lapostal.beans.Reception;
import com.lapostal.beans.ReceptionRepository;
import com.lapostal.beans.TypeReception;
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
		
		
		@GetMapping("/tableau/bord1")
		public ResponseEntity<Map<String, List<ChartLineByMonthDTO>>> tableaudebord2()
		{
			try {
				
				Map<String, List<ChartLineByMonthDTO>> envois = new HashMap<String, List<ChartLineByMonthDTO>>();
				
				for(TypeReception article : typeReceptionRepository.findAll())
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
					  envois.computeIfAbsent(article.getName(),  k -> new ArrayList<>()).add(month);
					 
					}
				}

				/**
				 * Recupration de la liste par mois
				 */
				
				for(JSONObject json : receptionRepository.tableaudebord3())
				{
					
					List<ChartLineByMonthDTO> chart =  envois.get(json.get("type").toString());				
						
					ChartLineByMonthDTO month = new ChartLineByMonthDTO();
					month = chart.get(Integer.parseInt(json.get("updatedat").toString())-1);	
					month.setValue(Integer.parseInt(json.get("COUNT").toString()));
					month.setColor((json.get("color") == null) ? "#0000":json.get("color").toString());
					
					chart.set(Integer.parseInt(json.get("updatedat").toString())-1, month);	

					envois.replace(json.get("type").toString(), chart);	
					
				}
				
							
				return new ResponseEntity<Map<String, List<ChartLineByMonthDTO>>>(envois, HttpStatus.OK);
			}catch(Exception ex)
			{		
				ex.printStackTrace();
				return new ResponseEntity<Map<String, List<ChartLineByMonthDTO>>>(HttpStatus.FORBIDDEN);
			}	
			
		}
		
		
		@GetMapping("/tableau/bord2")
		public ResponseEntity<Map<String, List<ChartLineByMonthDTO>>> tableaudebord3()
		{
			try {
				
				Map<String, List<ChartLineByMonthDTO>> envois = new HashMap<String, List<ChartLineByMonthDTO>>();
				
				for(TypeReception article : typeReceptionRepository.findAll())
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
					  envois.computeIfAbsent(article.getName(),  k -> new ArrayList<>()).add(month);
					 
					}
				}

				/**
				 * Recupration de la liste par mois
				 */
				
				for(JSONObject json : receptionRepository.tableaudebord4())
				{
					
					List<ChartLineByMonthDTO> chart =  envois.get(json.get("type").toString());				
						
					ChartLineByMonthDTO month = new ChartLineByMonthDTO();
					month = chart.get(Integer.parseInt(json.get("updatedat").toString())-1);	
					month.setValue(Integer.parseInt(json.get("COUNT").toString()));
					month.setColor((json.get("color") == null) ? "#0000":json.get("color").toString());
					
					chart.set(Integer.parseInt(json.get("updatedat").toString())-1, month);	

					envois.replace(json.get("type").toString(), chart);	
					
				}
				
							
				return new ResponseEntity<Map<String, List<ChartLineByMonthDTO>>>(envois, HttpStatus.OK);
			}catch(Exception ex)
			{		
				ex.printStackTrace();
				return new ResponseEntity<Map<String, List<ChartLineByMonthDTO>>>(HttpStatus.FORBIDDEN);
			}	
			
		}
		
		
}
