package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.repository.CustomerReviewRepository;
import com.examly.springapp.exception.ResourceNotFoundException;

import com.examly.springapp.model.Customer;
@RestController 

@CrossOrigin(origins = "https://8081-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io")

public class CustomerReviewController {
    
    @Autowired
    private CustomerReviewRepository customerReviewRepository;


    //store
    @PostMapping("/user/addreview")
    public Customer createCustomer(@RequestBody Customer customer){
        return customerReviewRepository.save(customer);
    }
    
    //fatch the data 
   
    
    @GetMapping("/admin/getreview")
    public List<Customer> getAllCustomers(){
		return customerReviewRepository.findAll();
	}
}
