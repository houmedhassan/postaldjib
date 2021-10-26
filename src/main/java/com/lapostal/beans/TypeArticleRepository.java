package com.lapostal.beans;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeArticleRepository extends JpaRepository<TypeArticle, Integer>{
	
	
	/**
	 * Liste of type article
	 */
	public List<TypeArticle> findAll();
	
	/**
	 * 
	 * @param name
	 * @return
	 */
	public TypeArticle findByName(String name);

}
