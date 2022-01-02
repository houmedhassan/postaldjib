package com.lapostal.beans.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class VenteEnteteDTO {
	
	private String month;
	private int typevente;
	private LocalDate datevente;

}
