package com.hexa.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexa.entity.Policy;
import com.hexa.repository.PolicyRepository;

@Service
public class PolicyServiceImpl implements PolicyService {

    @Autowired
    private PolicyRepository policyRepository;

    @Override
    public Policy createPolicy(Policy policy) {
        return policyRepository.save(policy);
    }
}
