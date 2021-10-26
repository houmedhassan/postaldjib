//package com.lapostal.beans;
//
//import java.time.LocalDate;
//import java.time.LocalDateTime;
//
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//
//import com.lapostal.security.entities.User;
//
//public class Produit {
//
//	
//	@Id
//	private int gkey;
//	
//	private String name;
//	
//	private String reference;
//	private LocalDate datereception;
//	
//	@ManyToOne
//	@JoinColumn(referencedColumnName = "id", name = "created")
//	private User created;
//	private LocalDateTime createdat;
//	
//	@ManyToOne
//	@JoinColumn(referencedColumnName = "id", name = "updated")
//	private  User updated;
//	private LocalDateTime updatedat;
//	
//}
