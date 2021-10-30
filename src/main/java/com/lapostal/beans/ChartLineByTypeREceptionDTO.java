package com.lapostal.beans;

import java.util.List;

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
public class ChartLineByTypeREceptionDTO {

	
	private String type;
	private String color;
	private List<ChartLineByMonthDTO> charts;
}
