//package com.lapostal.beans;
//
//import java.time.LocalDateTime;
//
//import javax.persistence.Entity;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//
//import com.lapostal.security.entities.User;
//
//import lombok.Builder;
//import lombok.Getter;
//import lombok.Setter;
//
//
//@Builder
//@Getter
//@Setter
//@Entity
//public class Categorie {
//	
//	private int gkey;	
//	private String nom;
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
//
//}
