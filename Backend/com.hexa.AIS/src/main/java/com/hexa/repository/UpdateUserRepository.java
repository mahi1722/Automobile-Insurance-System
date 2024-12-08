package com.hexa.repository;

import com.hexa.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UpdateUserRepository extends JpaRepository<User, String> {
    User findByEmail(String email);
}