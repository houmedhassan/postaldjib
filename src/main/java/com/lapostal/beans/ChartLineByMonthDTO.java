package com.lapostal.beans;

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
public class ChartLineByMonthDTO {
	
	private String monthname;	
	private int value;
	private int index;
	private String color;

}
