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

import com.examly.springapp.repository.GiftsRepo;
import com.examly.springapp.exception.ResourceNotFoundException;

import com.examly.springapp.model.GiftModel;

@CrossOrigin(origins = "https://8081-adafccfdcacfdadebbecffccbcffabaefd.project.examly.io")
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
    GiftModel existingGift = gift.findById(giftId).orElseThrow(()->new ResourceNotFoundException("no gift with this id: "+giftId));
   
    existingGift.setGiftId(g.getGiftId());
    existingGift.setGiftName(g.getGiftName());
    existingGift.setGiftImageUrl(g.getGiftImageUrl());
    existingGift.setGiftDetails(g.getGiftDetails());
    existingGift.setGiftPrice(g.getGiftPrice());
    existingGift.setGiftQuantity(g.getGiftQuantity());
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

}

