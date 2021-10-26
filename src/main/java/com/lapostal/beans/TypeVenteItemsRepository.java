package com.lapostal.beans;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeVenteItemsRepository extends JpaRepository<TypeVenteItems, Integer>{
	
	
	/**
	 * 
	 */
	public List<TypeVenteItems> findAll();

}
