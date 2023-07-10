package com.examly.springapp.model;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="giftmodels")
public class GiftModel {
	@Id
private int giftId;
private String giftName;
private String GiftImageUrl;
private String giftDetails;
private Integer giftPrice;
private Integer giftQuantity;
private String occassion;
private Integer rating;
private String recipient;
private Integer sold;
private LocalDateTime dateTime;
private Double discountPrice;
public String getOccassion() {
	return occassion;
}
public void setOccassion(String occassion) {
	this.occassion = occassion;
}
public Integer getRating() {
	return rating;
}
public void setRating(Integer rating) {
	this.rating = rating;
}
public String getRecipient() {
	return recipient;
}
public void setRecipient(String recipient) {
	this.recipient = recipient;
}
public Integer getSold() {
	return sold;
}
public void setSold(Integer sold) {
	this.sold = sold;
}

public LocalDateTime getDateTime() {
	return dateTime;
}
public void setDateTime(LocalDateTime dateTime) {
	this.dateTime = dateTime;
}
public Double getDiscountPrice() {
	return discountPrice;
}
public void setDiscountPrice(Double discountPrice) {
	this.discountPrice = discountPrice;
}


public Integer getGiftId() {
	return giftId;
}
public void setGiftId(Integer giftId) {
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
public Integer getGiftPrice() {
	return giftPrice;
}
public void setGiftPrice(Integer giftPrice) {
	this.giftPrice = giftPrice;
}
public Integer getGiftQuantity() {
	return giftQuantity;
}
public void setGiftQuantity(Integer giftQuantity) {
	this.giftQuantity = giftQuantity;
}

}