package com.lapostal.beans;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LivraisonRepository extends JpaRepository<Livraison, Integer>{
	
	/**
	 * 
	 */
	List<Livraison> findAll();
	
	/**
	 * 
	 * @param reference
	 * @return
	 */
	Livraison findByReference(String reference);
	
	/**
	 * 
	 * @param etat
	 * @return
	 */
	List<Livraison> findByEtat(String etat);
	
	@Query(value="SELECT COUNT(*) COUNT,   type, color,  MONTH(updatedat) AS updatedat  FROM envoi  group by type, color, MONTH(updatedat)", nativeQuery = true)
	List<JSONObject> tableaudebord2();
	

}
