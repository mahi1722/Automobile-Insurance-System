package com.hexa.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.hexa.entity.Policy;

@Repository
public interface PolicyRepository extends JpaRepository<Policy, Long> {
}

