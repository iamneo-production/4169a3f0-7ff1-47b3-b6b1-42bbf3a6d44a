package com.examly.springapp.controller;

import com.examly.springapp.model.UserModel;
import com.examly.springapp.repository.UserRepo;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "https://8081-bdfdcdfbaecceaceccfdadebbecffccbcffabaefd.project.examly.io")


@RestController
@RequestMapping("/admin/users")
public class UserController {
    private final UserRepo userRepository;

    public UserController(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<UserModel> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public UserModel addUser(@RequestBody UserModel user) {
        return userRepository.save(user);
    }

    @PutMapping("/{userId}")
    public UserModel editUser(@PathVariable Long userId, @RequestBody UserModel editedUser) {
        return userRepository.findById(userId)
                .map(user -> {
                    user.setName(editedUser.getName());
                    user.setEmail(editedUser.getEmail());
                    user.setPhonenumber(editedUser.getPhonenumber());
                    return userRepository.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
    }

    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userRepository.deleteById(userId);
    }

}