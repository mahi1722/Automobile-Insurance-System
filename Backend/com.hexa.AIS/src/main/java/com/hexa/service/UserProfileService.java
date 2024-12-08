package com.hexa.service;


import com.hexa.dto.UserProfileDTO;
import com.hexa.entity.User;
import com.hexa.repository.UpdateUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserProfileService {
    @Autowired
    private UpdateUserRepository userRepository;

    @Transactional(readOnly = true)
    public UserProfileDTO getUserProfile(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("User not found");
        }
        
        return convertToDTO(user);
    }

    @Transactional
    public UserProfileDTO updateUserProfile(UserProfileDTO userProfileDTO) {
        // Find existing user by email
        User existingUser = userRepository.findByEmail(userProfileDTO.getEmail());
        
        if (existingUser == null) {
            throw new RuntimeException("User not found");
        }

        // Update user details
        existingUser.setName(userProfileDTO.getName());
        existingUser.setAddress(userProfileDTO.getAddress());
        existingUser.setDateOfBirth(userProfileDTO.getDateOfBirth());
        existingUser.setAadharNo(userProfileDTO.getAadharNo());
        existingUser.setPanNo(userProfileDTO.getPanNo());

        // Save updated user
        User updatedUser = userRepository.save(existingUser);
        
        return convertToDTO(updatedUser);
    }

    // Helper method to convert Entity to DTO
    private UserProfileDTO convertToDTO(User user) {
        return new UserProfileDTO(
            user.getUserId(),
            user.getName(),
            user.getEmail(),
            user.getAddress(),
            user.getDateOfBirth(),
            user.getAadharNo(),
            user.getPanNo()
        );
    }
}
