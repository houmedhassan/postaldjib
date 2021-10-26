package com.lapostal.beans;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PaysRepository extends JpaRepository<Pays, String> {
	
	
	/**
	 * Find All
	 */
	List<Pays> findAll();

}
