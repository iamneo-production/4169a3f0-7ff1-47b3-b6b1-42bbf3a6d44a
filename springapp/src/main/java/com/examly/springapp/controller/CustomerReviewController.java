package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.examly.springapp.repository.CustomerReviewRepository;
import com.examly.springapp.exception.ResourceNotFoundException;

import com.examly.springapp.model.Customer;
@RestController 
@RequestMapping("/user") 
@CrossOrigin(origins = "https://8081-dabbcfcbdefcfdadebbecffccbcffabaefd.project.examly.io")
public class CustomerReviewController {
    
    @Autowired
    private CustomerReviewRepository customerReviewRepository;


    //store
    @PostMapping("/customers")
    public Customer createCustomer(@RequestBody Customer customer){
        return customerReviewRepository.save(customer);
    }
    
}
