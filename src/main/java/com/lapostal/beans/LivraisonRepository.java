package com.lapostal.beans;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

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
	

}
