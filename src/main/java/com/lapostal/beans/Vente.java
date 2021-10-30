package com.lapostal.beans;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.lapostal.security.entities.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@Entity
@NoArgsConstructor
@Builder
@Table(name="vente")
public class Vente {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
    @ManyToOne
    @JoinColumn(name = "typevente", insertable = false, updatable = false)
    private TypeVente typevente;
    @ManyToOne
    @JoinColumn(name = "itemstypevente", insertable = false, updatable = false, nullable = true)
    private TypeVenteItems itemstypevente;
    
    private LocalDate datevente;
    
	private String nom;
	private  double prix;
	private double penalite; 
	private String typepaiement;
	
	private double prixtotal;
	
	@ManyToOne
	@JoinColumn(referencedColumnName = "id", name = "created")
	private User created;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime createdat; 
	
	@ManyToOne
	@JoinColumn(referencedColumnName = "id", name = "updated")
	private User updated;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime updatedat; 
}
