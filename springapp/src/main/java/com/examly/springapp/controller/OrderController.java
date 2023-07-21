package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import com.examly.springapp.model.OrderModel;
import com.examly.springapp.repository.OrderRepository;

@CrossOrigin(origins = "https://8081-dcabbfbbebfcfdadebbecffccbcffabaefd.project.examly.io")
@RestController
public class OrderController {
    @Autowired
    public OrderRepository orderRepo;

    public OrderController(OrderRepository orderRepo) {
        this.orderRepo = orderRepo;
    }

    // add order
    @PostMapping("/user/order/AddOrder")
    public OrderModel addOrder(@RequestBody OrderModel orderModel) {
        return orderRepo.save(orderModel);
    }

    // edit order
    @PutMapping("user/order/editOrder/{orderId}")
    public ResponseEntity<OrderModel> editOrder(@PathVariable int orderId, @RequestBody OrderModel orderModel) {
        OrderModel updateOrder = orderRepo.findById(orderId).orElse(null);
        if (updateOrder != null) {
            updateOrder.setOrderName(orderModel.getOrderName());
            updateOrder.setOrderAddress(orderModel.getOrderAddress());
            updateOrder.setOrderEmail(orderModel.getOrderEmail());
            updateOrder.setOrderDate(orderModel.getOrderDate());
            updateOrder.setOrderPhone(orderModel.getOrderPhone());
            updateOrder.setOrderPrice(orderModel.getOrderPrice());
            updateOrder.setOrderDescription(orderModel.getOrderDescription());
            updateOrder.setSelectThemeModel(orderModel.getSelectThemeModel());
            updateOrder.setSelectGiftModel(orderModel.getSelectGiftModel());
            orderRepo.save(updateOrder);
            return ResponseEntity.ok(updateOrder);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // delete Order
    @DeleteMapping("user/order/deleteOrder/{orderId}")
    public String deleteDetails(@PathVariable int orderId) {
        orderRepo.deleteById(orderId);
        return "Order Deleted Successfully " + orderId;
    }
}