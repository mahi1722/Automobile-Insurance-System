package com.hexa.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hexa.entity.Officer;
import com.hexa.entity.User;
import com.hexa.enums.USER_ROLE;
import com.hexa.repository.OfficerRepository;
import com.hexa.repository.UserRepository;



@Service
public class CustomUserServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private OfficerRepository officerRepository;

	private static final String OFFICER_PREFIX = "officer_";

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		if (username.startsWith(OFFICER_PREFIX)) {
			String actualUsername = username.substring(OFFICER_PREFIX.length());
			Officer of = officerRepository.findByEmail(actualUsername);

			if (of != null) {
				return buildUserDetails(of.getEmail(), of.getPassword(), of.getRole());
			}

		} else {
			User user = userRepository.findByEmail(username);

			if (user != null) {
				return buildUserDetails(user.getEmail(), user.getPassword(), user.getRole());
			}
		}

		throw new UsernameNotFoundException("User not found with username: " + username);
	}

	private UserDetails buildUserDetails(String email, String password, USER_ROLE role) {
		if (role == null) {
			role = USER_ROLE.ROLE_CUSTOMER;
		}
		List<GrantedAuthority> authorityList = new ArrayList<>();
		authorityList.add(new SimpleGrantedAuthority(role.toString()));
		return new org.springframework.security.core.userdetails.User(email, password, authorityList);

	}

}