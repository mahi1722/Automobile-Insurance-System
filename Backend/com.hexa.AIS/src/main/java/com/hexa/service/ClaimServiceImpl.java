package com.hexa.service;


import com.hexa.entity.Claim;
import com.hexa.entity.User;
import com.hexa.dto.ClaimDTO;
import com.hexa.repository.ClaimRepository;
import com.hexa.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClaimServiceImpl implements ClaimService {

    @Autowired
    private ClaimRepository claimRepository;

    @Autowired
    private UserRepository userRepository;  // Add UserRepository to fetch users

    @Override
    public Claim createClaim(ClaimDTO claimDTO) {
        // Fetch the user by userId
        User user = userRepository.findById(claimDTO.getUserId()).orElse(null);
        if (user == null) {
            throw new RuntimeException("User not found");
        }

        // Create a new claim and set the user
        Claim claim = new Claim();
        claim.setClaimNumber(claimDTO.getClaimNumber());
        claim.setDescription(claimDTO.getDescription());
        claim.setStatus(claimDTO.getStatus());
        claim.setUser(user);  // Set the user

        // Save the claim
        return claimRepository.save(claim);
    }

    @Override
    public Claim getClaimById(Long claimId) {
        return claimRepository.findById(claimId).orElse(null);
    }
}
