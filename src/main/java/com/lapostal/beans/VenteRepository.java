package com.lapostal.beans;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface VenteRepository extends JpaRepository<Vente, Integer> {

	
	/**
	 * @return list of Vente
	 */
	List<Vente> findAll();
	
	/***
	 * find of date 
	 * @param date
	 * @return
	 */
	List<Vente> findByDateventeOrderByIdDesc(LocalDate date);
	
	/**
	 * 
	 * @param annee
	 * @param month
	 * @return
	 */
	List<Vente> findByAnneeAndMonthOrderByItemstypevente(int annee, int month);
	
	
}
