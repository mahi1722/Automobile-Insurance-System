package com.hexa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexa.entity.Officer;



public interface OfficerRepository extends JpaRepository<Officer, String> {

	public Officer findByEmail(String email);

}