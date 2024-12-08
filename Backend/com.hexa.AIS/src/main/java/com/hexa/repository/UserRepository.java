package com.hexa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexa.entity.User;



public interface UserRepository extends JpaRepository<User, String> {

	public User findByEmail(String email);
	

}