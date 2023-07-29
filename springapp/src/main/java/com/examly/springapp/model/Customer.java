package com.examly.springapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    @Column(name = "customerName")
    private String customerName;

    
    @Column(name="productName")
    private String productName;
    
    @Column(name="customerFeedBack")
    private String customerFeedBack;
    
    @Column(name="ratings")
    private int ratings;

    
    public Customer(){

    }
    
    public Customer(String customerName, String productName, String customerFeedBack, int ratings) {
        this.customerName = customerName;
        this.productName = productName;
        this.customerFeedBack = customerFeedBack;
        this.ratings = ratings;
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getCustomerFeedBack() {
        return customerFeedBack;
    }

    public void setCustomerFeedBack(String customerFeedBack) {
        this.customerFeedBack = customerFeedBack;
    }

    public int getRatings() {
        return ratings;
    }

    public void setRatings(int ratings) {
        this.ratings = ratings;
    }


    
}
