package com.hexa.service;


import com.hexa.entity.Claim;
import com.hexa.dto.ClaimDTO;

public interface ClaimService {
    Claim createClaim(ClaimDTO claimDTO);
    Claim getClaimById(Long claimId);
}

