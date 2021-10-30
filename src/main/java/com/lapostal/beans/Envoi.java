package com.lapostal.beans;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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
@Table(name="envoi")
public class Envoi {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gkey;
	
	private String reference;
	
	private String name;	
	private String type;
	private String adresse;
	private String email;
	
	private String nomsender;
	private String telexpediteur;
	
	
	private String pays;
	private String namerecipient;
	private String telrecipient;
	
	private String tel2;
	private String color;
	
	@ManyToOne
	@JoinColumn(name="article", referencedColumnName = "gkey")
	private TypeArticle article;
	
	@ManyToOne
	@JoinColumn(referencedColumnName = "id", name = "created")
	private User created;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime createdat;
	
	@ManyToOne
	@JoinColumn(referencedColumnName = "id", name = "updated")
	private  User updated;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime updatedat;
	
	private String idcrypt;
}
