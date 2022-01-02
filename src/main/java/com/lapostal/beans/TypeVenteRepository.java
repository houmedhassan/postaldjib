package com.lapostal.beans;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeVenteRepository extends JpaRepository<TypeVente, Integer>{
	
	
	/**
	 * 
	 */
	List<TypeVente> findAll();
	
	
	
	
	

}
