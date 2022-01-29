package com.lapostal.beans.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lapostal.beans.ChartLineByMonthDTO;
import com.lapostal.beans.Livraison;
import com.lapostal.beans.LivraisonRepository;
import com.lapostal.beans.TypeArticle;
import com.lapostal.beans.TypeArticleRepository;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/api/postal/livraison")
public class LivraisonController {
	
	
	@Autowired
	LivraisonRepository livraisonRepository;
	
	@Autowired
	TypeArticleRepository typeArticleRepository;
	

	/**
	 * 
	 * @param principal
	 * @return
	 */
	@GetMapping("/all")
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_LIVRAISON')")
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
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_LIVRAISON')")
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
	@PreAuthorize("hasRole('ADMIN') or hasRole('ROLE_STAFF_LIVRAISON')")
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
	
	
	@GetMapping("/tableau/bord2")
	public ResponseEntity<Map<String, List<ChartLineByMonthDTO>>> tableaudebord2()
	{
		try {
			Map<String, List<ChartLineByMonthDTO>> envois = new HashMap<String, List<ChartLineByMonthDTO>>();
			
			for(TypeArticle article : typeArticleRepository.findAll())
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
			
			for(JSONObject json : livraisonRepository.tableaudebord2())
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
