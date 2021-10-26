package com.lapostal.beans;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceptionHistoriqueRepository extends JpaRepository<ReceptionHistorique, Integer>{
	
	
	
	/**
	 * 
	 * @param reference
	 * @return
	 */
	public List<ReceptionHistorique> findByReference(String reference);

}
