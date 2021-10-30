package com.lapostal.beans;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReceptionRepository extends JpaRepository<Reception, Integer>{

	/**
	 *  List of article to send
	 */
	List<Reception> findAll();
	
	//Reception findByReference(String reference);
	
	
	/**
	 *  List of article to recipent by type and order by id 
	 * @return
	 */
	List<Reception> findByTypeAndDatesortieIsNullOrderByGkeyDesc(String envoi);
	
	
	/**
	 * 
	 * @return
	 */
	List<Reception> findByDatesortieIsNull();
	
	/**
	 * 
	 * @return
	 */
	List<Reception> findByDatesortieIsNullAndDommageFalse();
	
	/**
	 * 
	 * @return
	 */
	List<Reception> findByDatesortieIsNullAndDommageTrue();
	/**
	 * 
	 * @param param
	 * @return
	 */
	List<Reception> findByReferenceContaining(String param);
	
	/**
	 * 
	 * @param param
	 * @return
	 */
	List<Reception> findByReferenceContainingAndDatesortieIsNull(String param);
	
	
	/**
	 * 
	 * @param reference
	 * @return
	 */
	Reception findByReference(String reference);
	
	/**
	 * 
	 * @param gkey
	 * @return
	 */
	Reception findByGkey(int gkey);
	
	
	
	
	/**
	 * 
	 * @param idcrypt
	 * @return
	 */
	Reception findByIdcrypt(String idcrypt);
	
	/**
	 * 
	 * @return
	 */
	@Query(value="SELECT count(*) AS COUNT, type, color  FROM [epostal].[dbo].reception  group by type, color ", nativeQuery = true)
	List<JSONObject> tableaudebord();
	
	/**
	 * 
	 * @return
	 */
	@Query(value="SELECT COUNT(*) COUNT,   type, color,  MONTH(updatedat) AS updatedat  FROM [epostal].[dbo].reception  group by type, color, MONTH(updatedat)", nativeQuery = true)
	List<JSONObject> tableaudebord2();
	
	
	
	@Query(value="SELECT COUNT(*) COUNT,   type, color,  MONTH(updatedat) AS updatedat  FROM [epostal].[dbo].reception where dommage = 1  group by type, color, MONTH(updatedat)", nativeQuery = true)
	List<JSONObject> tableaudebord3();	
	
	
	@Query(value="SELECT COUNT(*) COUNT,   type, color,  MONTH(updatedat) AS updatedat  FROM [epostal].[dbo].reception where dommage = 0  group by type, color, MONTH(updatedat)", nativeQuery = true)
	List<JSONObject> tableaudebord4();
	
}
