package com.lapostal.beans;


import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

public interface EnvoiRepository extends JpaRepository<Envoi, Integer> {
	
	
	/**
	 *  List of article to send
	 */
	List<Envoi> findAll();
	
	
	/**
	 *  List of article to send by type and order by id 
	 * @return
	 */
	List<Envoi> findByTypeOrderByGkeyDesc(String envoi);
	
	
	/**
	 * 
	 * @param gkey
	 * @return
	 */
	Envoi findByGkey(int gkey);
	
	
	
	
	/**
	 * 
	 * @param idcrypt
	 * @return
	 */
	Envoi findByIdcrypt(String idcrypt);
	
	
	@Query(value="SELECT count(*) AS COUNT, type  FROM [epostal].[dbo].[envoi]  group by type ", nativeQuery = true)
	List<JSONObject> tableaudebord();
	

}
