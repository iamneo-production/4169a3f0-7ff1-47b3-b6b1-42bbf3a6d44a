package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

import com.examly.springapp.model.GiftModel;

public interface GiftsRepo extends JpaRepository<GiftModel,Integer>{
    List<GiftModel> findTop4ByOrderByRatingDesc();
	List<GiftModel> findTop4ByOrderByDateTimeDesc();
	List<GiftModel> findByOccasionAndRecipientAndGiftPriceBetweenAndGiftDetails(String occasion, String recipient, double minPrice, double maxPrice, String giftDetails);
	 List<GiftModel> findTop4ByOrderBySoldDesc();
	 List<GiftModel> findByOccasion(String occasion);
	 List<GiftModel>findByRecipient(String recipient);
	 @Query("SELECT DISTINCT p.occasion FROM GiftModel p")
	    List<String> findDistinctOccasion();
	 @Query("SELECT DISTINCT p.recipient FROM GiftModel p")
	    List<String> findDistinctRecipient();
	 

}