package com.hexa.controller;

import com.hexa.entity.Claim;
import com.hexa.dto.ClaimDTO;
import com.hexa.service.ClaimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/claims")
public class ClaimController {

    @Autowired
    private ClaimService claimService;

    @PostMapping
    public ResponseEntity<Claim> createClaim(@RequestBody ClaimDTO claimDTO) {
        Claim createdClaim = claimService.createClaim(claimDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdClaim);
    }

    @GetMapping("/{claimId}")
    public ResponseEntity<Claim> getClaim(@PathVariable Long claimId) {
        Claim claim = claimService.getClaimById(claimId);
        if (claim != null) {
            return ResponseEntity.ok(claim);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }
}
