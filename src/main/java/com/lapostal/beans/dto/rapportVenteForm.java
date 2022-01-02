package com.lapostal.beans.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class rapportVenteForm {
	
	private LocalDate datedebut;
	
	private LocalDate datefin;

}
