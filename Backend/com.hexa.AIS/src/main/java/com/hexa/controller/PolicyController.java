package com.hexa.controller;




import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hexa.entity.Policy;
import com.hexa.service.PolicyService;

@RestController
@RequestMapping("/api/policy")
// @CrossOrigin(origins = "http://localhost:3000") // Match frontend URL
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    @PostMapping("/create")
    public ResponseEntity<?> createPolicy(@RequestBody Policy policy) {
        try {
            // Save the policy and return the created policy as a response
            Policy createdPolicy = policyService.createPolicy(policy);
            if (createdPolicy != null) {
                return ResponseEntity.ok(createdPolicy); // Return the created policy as JSON
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                     .body(Map.of("error", "Policy creation failed", "message", "Unexpected error occurred."));
            }
        } catch (IllegalArgumentException ex) {
            // Handle validation errors or bad data
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body(Map.of("error", "Invalid data", "message", ex.getMessage()));
        } catch (Exception e) {
            // Handle any unexpected errors
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(Map.of("error", "Failed to create policy", "message", e.getMessage()));
        }
    }


}

