package com.hexa.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "PROPOSAL")
public class Proposal {
    @Id
    @Column(name = "proposal_id")
    private String proposalId;
    
    @Column(name = "submission_date")
    private LocalDate submissionDate;
    
    private String status;
    
    @Column(name = "additional_docs", columnDefinition = "TEXT")
    private String additionalDocs;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    
    
    @ManyToOne
    @JoinColumn(name = "officer_id")
    private Officer officer;
    
   

	public String getProposalId() {
		return proposalId;
	}

	public void setProposalId(String proposalId) {
		this.proposalId = proposalId;
	}

	public LocalDate getSubmissionDate() {
		return submissionDate;
	}

	public void setSubmissionDate(LocalDate submissionDate) {
		this.submissionDate = submissionDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAdditionalDocs() {
		return additionalDocs;
	}

	public void setAdditionalDocs(String additionalDocs) {
		this.additionalDocs = additionalDocs;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	

	public Officer getOfficer() {
		return officer;
	}

	public void setOfficer(Officer officer) {
		this.officer = officer;
	}

	

	public Proposal(String proposalId, LocalDate submissionDate, String status, String additionalDocs, User user,
			Officer officer) {
		super();
		this.proposalId = proposalId;
		this.submissionDate = submissionDate;
		this.status = status;
		this.additionalDocs = additionalDocs;
		this.user = user;
		
		this.officer = officer;
		
	}

	public Proposal() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    // Getters, setters, and constructors
    
}