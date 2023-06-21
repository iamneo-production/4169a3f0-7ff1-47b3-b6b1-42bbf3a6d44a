package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.examly.springapp.model.GiftModel;

public interface GiftsRepo extends JpaRepository<GiftModel,Integer>{

}