package com.examly.springapp.controller;

import java.util.List;

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

import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.Themes;
import com.examly.springapp.repository.ThemesRepository;


@RestController
@CrossOrigin(allowedHeaders="*",origins = "https://8081-abaaffbecfdadebbecffccbcffabaefd.project.examly.io")
@RequestMapping("/admin")
public class ThemesController {
	@Autowired
	private ThemesRepository themesRepository;
	
    @PostMapping("/addTheme")
	public String addTheme(@RequestBody Themes themes) {
	  themesRepository.save(themes);
	  return "Themes added";
	  
	  
	}
    
    @GetMapping("/getTheme")
    public List<Themes> getTheme(){
    	return themesRepository.findAll();
    }
    
    @DeleteMapping("/deleteTheme/{themeId}")
	public ResponseEntity<String> deleteTheme(@PathVariable int themeId){
    	Themes themes = themesRepository.findById(themeId).orElseThrow(()->new ResourceNotFoundException("no theme with this id: "+themeId));
    	themesRepository.delete(themes);
		
		return ResponseEntity.ok("Theme deleted");
    }
    
    @PutMapping("/editTheme/{themeId}")
	public ResponseEntity<String> updateTheme(@PathVariable int themeId, @RequestBody Themes themeDetails){
    	Themes themes = themesRepository.findById(themeId).orElseThrow(()->new ResourceNotFoundException("no theme with this id: "+themeId));
		
		themes.setThemeName( themeDetails.getThemeName());
		themes.setThemePrice( themeDetails.getThemePrice());
		themes.setThemeDescription( themeDetails.getThemeDescription());
		
		themesRepository.save(themes);
		return ResponseEntity.ok("Theme edited");
	}
}

