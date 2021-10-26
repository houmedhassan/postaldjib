package com.lapostal.beans;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeReceptionRepository extends JpaRepository<TypeReception, Integer> {
	
	
	/***
	 * 
	 */
	public List<TypeReception> findAll();

	
	/**
	 * 
	 * @param nma
	 * @return
	 */
	public TypeReception findByName(String nma);
}
