package com.examly.springapp.model;

import java.time.LocalDateTime;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "giftmodels")
public class GiftModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int giftId;
    private String giftName;
    private String GiftImageUrl;
    private String giftDetails;

    private double giftPrice;
    private int giftQuantity;
    private String occasion;
    private int rating;
    private String recipient;
    private int sold;
    private LocalDateTime dateTime;
    private double discountPrice;
    private String giftDescription;

    public String getOccasion() {
        return occasion;
    }

    public void setOccasion(String occasion) {
        this.occasion = occasion;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {

        this.rating = rating;
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public int getSold() {
        return sold;
    }

    public void setSold(int sold) {

        this.sold = sold;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public double getDiscountPrice() {
        return discountPrice;
    }

    public void setDiscountPrice(double discountPrice) {

        this.discountPrice = discountPrice;
    }

    public int getGiftId() {
        return giftId;
    }

    public void setGiftId(int giftId) {

        this.giftId = giftId;
    }

    public String getGiftName() {
        return giftName;
    }

    public void setGiftName(String giftName) {
        this.giftName = giftName;
    }

    public String getGiftImageUrl() {
        return GiftImageUrl;
    }

    public void setGiftImageUrl(String giftImageUrl) {
        GiftImageUrl = giftImageUrl;
    }

    public String getGiftDetails() {
        return giftDetails;
    }

    public void setGiftDetails(String giftDetails) {
        this.giftDetails = giftDetails;
    }

    public double getGiftPrice() {
        return giftPrice;
    }

    public void setGiftPrice(double giftPrice) {
        this.giftPrice = giftPrice;
    }

    public int getGiftQuantity() {
        return giftQuantity;
    }

    public void setGiftQuantity(int giftQuantity) {

        this.giftQuantity = giftQuantity;
    }

    public String getGiftDescription() {
        return giftDescription;
    }

    public void setGiftDescription(String giftDescription) {
        this.giftDescription = "A Memorable gift you can give your loved ones!";
    }

}