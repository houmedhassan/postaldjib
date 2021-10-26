package com.lapostal.beans;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.lapostal.security.entities.User;

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
@Entity
@Table(name="typereception")
public class TypeReception {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int gkey;	
	private String name;
	
	
	@ManyToOne
	@JoinColumn(referencedColumnName = "id", name = "created")
	private User created;
	private LocalDateTime createdat;
	
	@ManyToOne
	@JoinColumn(referencedColumnName = "id", name = "updated")
	private  User updated;
	private LocalDateTime updatedat;

}
