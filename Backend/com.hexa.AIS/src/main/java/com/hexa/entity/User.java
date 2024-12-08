package com.hexa.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

import com.hexa.enums.USER_ROLE;

@Entity
@Table(name = "USER")
public class User {
	@Id
	@Column(name = "user_id")
	private String userId;

	@PrePersist
	public void generateUserId() {
	    if (this.userId == null) {
	        this.userId = "USR" + System.currentTimeMillis(); // Generates unique userId
	    }
	}

    
    private String name;
    private String email;
    private String password;
    private String address;
    private USER_ROLE role = USER_ROLE.ROLE_CUSTOMER;
    
    public USER_ROLE getRole() {
		return role;
	}

	public void setRole(USER_ROLE role) {
		this.role = role;
	}

	@Column(name = "dob")
    private LocalDate dateOfBirth;
    
    @Column(name = "aadhar_no")
    private String aadharNo;
    
    @Column(name = "pan_no")
    private String panNo;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    
    @OneToMany(mappedBy = "user")
    private Set<Proposal> proposals;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}

	public String getPanNo() {
		return panNo;
	}

	public void setPanNo(String panNo) {
		this.panNo = panNo;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}


	public Set<Proposal> getProposals() {
		return proposals;
	}

	public void setProposals(Set<Proposal> proposals) {
		this.proposals = proposals;
	}

	public User(String userId, String name, String email, String password, String address, LocalDate dateOfBirth,
			String aadharNo, String panNo, LocalDateTime createdAt, Set<Proposal> proposals) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.address = address;
		this.dateOfBirth = dateOfBirth;
		this.aadharNo = aadharNo;
		this.panNo = panNo;
		this.createdAt = createdAt;
		this.proposals = proposals;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
    
    
}