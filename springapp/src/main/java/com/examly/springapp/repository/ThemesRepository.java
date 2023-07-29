package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Themes;

@Repository
public interface ThemesRepository extends JpaRepository<Themes,Integer>{

}
