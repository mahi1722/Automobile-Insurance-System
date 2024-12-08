package com.hexa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hexa.dto.AuthResponse;
import com.hexa.dto.LoginDTO;
import com.hexa.dto.SignUpDTO;

import com.hexa.enums.USER_ROLE;
import com.hexa.entity.User;
import com.hexa.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    // User Registration (Signup)
    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody SignUpDTO req) throws Exception {
        String jwt = userService.createUser(req);
        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(jwt);
        authResponse.setMessage("Register successful!");
        authResponse.setRole(USER_ROLE.ROLE_CUSTOMER);
        return ResponseEntity.ok(authResponse);
    }

    // User Login (Signin)
    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginDTO loginRequest) throws Exception {
        AuthResponse authResponse = userService.loginUser(loginRequest);
        return ResponseEntity.ok(authResponse);
    }

}
