package com.lapostal.beans;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AlarmeAnomalieRepository extends JpaRepository<AlarmeAnomalie, Integer>{

	/**
	 * 
	 * @param reference
	 * @return
	 */
	List<AlarmeAnomalie> findByReference(String reference);
}
