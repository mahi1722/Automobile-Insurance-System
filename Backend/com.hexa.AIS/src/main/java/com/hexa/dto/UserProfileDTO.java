package com.hexa.dto;

import java.time.LocalDate;

public class UserProfileDTO {
    private String userId;
    private String name;
    private String email;
    private String address;
    private LocalDate dateOfBirth;
    private String aadharNo;
    private String panNo;

    // Constructors
    public UserProfileDTO() {}

    public UserProfileDTO(String userId, String name, String email, String address, 
                           LocalDate dateOfBirth, String aadharNo, String panNo) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.aadharNo = aadharNo;
        this.panNo = panNo;
    }

    // Getters and Setters
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
}
