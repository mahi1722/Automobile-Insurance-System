package com.hexa.entity;

import jakarta.persistence.*;

import com.hexa.enums.USER_ROLE;

@Entity
@Table(name = "OFFICER")
public class Officer {
    @Id
    @Column(name = "officer_id")
    private String officerId;
    
    private String name;
    private String email;
    private String password;
    private USER_ROLE role = USER_ROLE.ROLE_OFFICER;
    
    
    public USER_ROLE getRole() {
		return role;
	}

	public void setRole(USER_ROLE role) {
		this.role = role;
	}


	public String getOfficerId() {
		return officerId;
	}

	public void setOfficerId(String officerId) {
		this.officerId = officerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public Officer(String officerId, String name, String email, String password, String role) {
		super();
		this.officerId = officerId;
		this.name = name;
		this.email = email;
		this.password = password;
		
	}

	public Officer() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
}