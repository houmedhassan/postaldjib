package com.lapostal.beans.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class EnvoieDTO {

	
	private String reference;
	
	private String name;	
	private String type;
	private String adresse;
	private String email;
	
	private String nomsender;
	private String telexpediteur;
	
	private String namerecipient;
	private String telrecipient;
	
	private String tel2;

	private DropdownDTO typearticle;
	
	
}
