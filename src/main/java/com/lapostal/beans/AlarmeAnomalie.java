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
@Table(name="alarmeanomalie")
public class AlarmeAnomalie {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gkey;
	
	
	private String reference;
	private String typeAlarme;
	private String commentaire;
	private String status;
	
	@ManyToOne
	@JoinColumn(name="article", referencedColumnName = "gkey")
	private Reception article;
	
	
	@ManyToOne
	@JoinColumn(referencedColumnName = "id", name = "created")
	private User created;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime createdat; 
	
	
}
