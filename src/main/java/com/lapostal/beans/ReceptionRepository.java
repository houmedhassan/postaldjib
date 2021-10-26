package com.lapostal.beans;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceptionRepository extends JpaRepository<Reception, Integer>{

	/**
	 *  List of article to send
	 */
	List<Reception> findAll();
	
	
	/**
	 *  List of article to recipent by type and order by id 
	 * @return
	 */
	List<Reception> findByTypeOrderByGkeyDesc(String envoi);
	
	
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
	
}
