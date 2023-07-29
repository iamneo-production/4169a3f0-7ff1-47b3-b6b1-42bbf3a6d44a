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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.examly.springapp.repository.GiftsRepo;
import com.examly.springapp.exception.ResourceNotFoundException;
import java.util.List;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.examly.springapp.model.GiftModel;

@CrossOrigin(origins = "https://8081-afebfaaebebecfdadebbecffbdeeacabbcedbbb.project.examly.io")
@RestController
@RequestMapping("/admin")
public class GiftController {
	
	@Autowired
	private GiftsRepo gift;
	

@GetMapping("/getGift")
public List<GiftModel> getAllgifts(){
	return gift.findAll();
	
}
@PostMapping("/addGift")
public String addGift(@RequestBody GiftModel data)
{
	gift.save(data);
	return "Gift added";
}
@GetMapping("/editGift/{giftId}")
public ResponseEntity<GiftModel> getEmployeeById(@PathVariable int giftId)
{
	GiftModel e = gift.findById(giftId).orElseThrow(()->new ResourceNotFoundException("no gift with this id: "+giftId));
	return ResponseEntity.ok(e);
}
@PutMapping("/editGift/{giftId}")
public ResponseEntity<String> editGift(@PathVariable int giftId,@RequestBody GiftModel g) {
    // Implementation logic to update gift details by ID
    // Use the 'id' parameter to identify the specific gift
    // Use the 'updatedGift' parameter to access the updated details sent in the request body

    // Example implementation:
   // GiftModel existingGift = gift.findById(giftId).orElseThrow(()->new ResourceNotFoundException("no gift with this id: "+giftId));
   
    GiftModel existingGift = gift.findById(giftId).orElseThrow(()->new ResourceNotFoundException("no gift with this id: "+giftId));
    
    existingGift.setGiftId(g.getGiftId());
    existingGift.setGiftName(g.getGiftName());
    existingGift.setGiftImageUrl(g.getGiftImageUrl());
    existingGift.setGiftDetails(g.getGiftDetails());
    existingGift.setGiftPrice(g.getGiftPrice());
    existingGift.setGiftQuantity(g.getGiftQuantity());
    existingGift.setOccasion(g.getOccasion());
    existingGift.setRating(g.getRating());
    existingGift.setRecipient(g.getRecipient());
    existingGift.setSold(g.getSold());
    existingGift.setDateTime(g.getDateTime());
    existingGift.setDiscountPrice(g.getDiscountPrice());
    GiftModel updated = gift.save(existingGift);
    ResponseEntity.ok(updated);
    return ResponseEntity.ok("Gift edited");
   
}

@DeleteMapping("/deleteGift/{giftId}")

public String deleteGift(@PathVariable int giftId)
{
	GiftModel existingGift = gift.findById(giftId).orElseThrow(()->new ResourceNotFoundException("no gift with this id: "+giftId));
	gift.delete(existingGift);
	return "Gift Deleted";
}



	@GetMapping("/best-sellers")
	public List<GiftModel> getBestSellers() {
		return gift.findTop4ByOrderByRatingDesc();
	}

	@GetMapping("/new-arrival")
	public List<GiftModel> getNewestArrivalProducts() {
		return gift.findTop4ByOrderByDateTimeDesc();
	}

	@GetMapping("/giftfinder")
	public List<GiftModel> filterProducts(
			@RequestParam(required = true) String occasion,
			@RequestParam(required = true) String recipient,
			@RequestParam(required = true) Double minPrice,
			@RequestParam(required = true) Double maxPrice,
			@RequestParam(required = true) String giftDetails
	) {
		return gift.findByOccasionAndRecipientAndGiftPriceBetweenAndGiftDetails(occasion, recipient, minPrice, maxPrice, giftDetails);
	}

	@GetMapping("/trending")
	public List<GiftModel> getTrendingItems() {
		return gift.findTop4ByOrderBySoldDesc();
	}

	@GetMapping("/fathers-day")
	public List<GiftModel> getProductsForFathersDay() {
		return gift.findByOccasion("Fathers day");
	}

	@GetMapping("/occasions")
	@ResponseBody
	public List<String> getDistinctOccasions() {
		return gift.findDistinctOccasion();
	}

	@GetMapping("/recipient")
	@ResponseBody
	public List<String> getDistinctRecipient() {
		return gift.findDistinctRecipient();
	}

	@GetMapping("/filterByOccasion")
	public List<GiftModel> getProductsByOccasion(@RequestParam("occasion") String occasion) {
		return gift.findByOccasion(occasion);
	}

	@GetMapping("/filterByRecipient")
	public List<GiftModel> getProductsByRecipient(@RequestParam("recipient") String recipient) {
		return gift.findByRecipient(recipient);
	}
	@GetMapping("/getProductDetails/{giftId}")
    public Map<String, Object> getProductDetails(@PathVariable int giftId) {
        GiftModel product = gift.findById(giftId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for id: " + giftId));

        Map<String, Object> productDetails = new HashMap<>();
        productDetails.put("image", product.getGiftImageUrl());
        productDetails.put("name", product.getGiftName());
        productDetails.put("price", product.getGiftPrice());
        productDetails.put("description", product.getGiftDescription());

        return productDetails;
    }
}



