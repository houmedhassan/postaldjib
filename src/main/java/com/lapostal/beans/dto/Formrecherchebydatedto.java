package com.lapostal.beans.dto;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class Formrecherchebydatedto {
	
	private LocalDate datedebut;
	private LocalDate datefin;

}
