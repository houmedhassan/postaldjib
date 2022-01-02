package com.lapostal.beans.dto;

import java.util.List;
import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RapportsVenteDTO {
	
	private String month;
	private List<String> entete;
	private Map<String, List<String>> listevente;
	
	private List<ListeVenteDTO> ventes;
	
}
