package com.lapostal.beans.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReceptionDTO {

	
	private String reference;
	
	private String name;	
	private String type;
	private String adresse;
	private String email;
	
	private String nomsender;
	private String telexpediteur;
	private String paysexpediteur;
	
	private String namerecipient;
	private String telrecipient;
	private String paysrecipient;
	
	private String tel2;

	private DropdownDTO typearticle;
	private LocalDate datereception;
	
	private boolean dommage;
	private String commentaire;
	private boolean envoisms;
}
