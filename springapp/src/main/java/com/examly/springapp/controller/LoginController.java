package com.examly.springapp.controller;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepo;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;


@CrossOrigin(origins = "https://8081-afebfaaebebecfdadebbecffbdeeacabbcedbbb.project.examly.io")

@RestController
@RequestMapping("/login")
public class LoginController {
    private final UserRepo userRepository;

    public LoginController(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping()
    public ResponseEntity<UserModel> login(@RequestBody UserModel user) {
        UserModel existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return new ResponseEntity<>(existingUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

}