package com.hexa.service;

import com.hexa.dto.AuthResponse;
import com.hexa.dto.LoginDTO;
import com.hexa.dto.SignUpDTO;
import com.hexa.entity.User;

public interface UserService {

    String createUser(SignUpDTO signUpRequest);

    AuthResponse loginUser(LoginDTO loginRequest);
    
}


