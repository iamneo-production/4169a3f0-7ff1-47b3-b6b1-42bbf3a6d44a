package com.examly.springapp.model;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="giftmodels")
public class GiftModel {
	@Id
private int giftId;
private String giftName;
private String GiftImageUrl;
private String giftDetails;
private int giftPrice;
private int giftQuantity;
private String occassion;
private int rating;
private String recipient;
private int sold;
private LocalDateTime dateTime;
private double discountPrice;
public String getOccassion() {
	return occassion;
}
public void setOccassion(String occassion) {
	this.occassion = occassion;
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
public int getGiftPrice() {
	return giftPrice;
}
public void setGiftPrice(int giftPrice) {
	this.giftPrice = giftPrice;
}
public int getGiftQuantity() {
	return giftQuantity;
}
public void setGiftQuantity(int giftQuantity) {
	this.giftQuantity = giftQuantity;
}

}