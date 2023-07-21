package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.OrderModel;

public interface OrderRepository extends JpaRepository<OrderModel, Integer> {

}
