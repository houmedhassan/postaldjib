package com.lapostal.beans;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Null;

import com.fasterxml.jackson.annotation.JsonFormat;
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
@Table(name="receptionhistorique")
public class ReceptionHistorique {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gkey;
	
	private String reference;
	
	private String statut;
	
	@ManyToOne
	@JoinColumn(name="article", referencedColumnName = "gkey")
	private TypeReception article;
	
	private String commentaire;
	
	@ManyToOne
	@JoinColumn(referencedColumnName = "id", name = "created")
	private User created;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime createdat;
	
	
	private boolean dommage = false;
	
	private String dommagecode=null;
	
	
	
	
	

}
