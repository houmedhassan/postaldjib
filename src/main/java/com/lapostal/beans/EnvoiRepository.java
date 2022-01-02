package com.lapostal.beans;


import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EnvoiRepository extends JpaRepository<Envoi, Integer> {
	
	
	/**
	 *  List of article to send
	 */
	List<Envoi> findAll();
	
	/**
	 * 
	 * @param reference
	 * @return
	 */
	Envoi findByReference(String reference);
	
	
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
	
	/**
	 * 
	 * @return
	 */
	@Query(value="SELECT count(*) AS COUNT, type  FROM envoi  group by type ", nativeQuery = true)
	List<JSONObject> tableaudebord();

	/**
	 * 
	 * @return
	 */
	@Query(value="SELECT COUNT(*) COUNT,   type, color,  MONTH(updatedat) AS updatedat  FROM envoi  group by type, color, MONTH(updatedat)", nativeQuery = true)
	List<JSONObject> tableaudebord2();

}
