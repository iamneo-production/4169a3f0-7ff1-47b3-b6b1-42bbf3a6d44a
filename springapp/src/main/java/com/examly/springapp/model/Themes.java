package com.examly.springapp.model;



import javax.persistence.*;


@Entity
@Table(name="themes")
public class Themes {
	
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int themeId;
	
	@Column(name = "theme_name")
	private String themeName;
	
	@Column(name = "theme_price")
	private int themePrice;
	
	@Column(name = "theme_description")
	private String themeDescription;
	
	public Themes(){
		
	}
	
	
	public Themes(String themeName, int themePrice, String themeDescription) {
		super();
		this.themeName = themeName;
		this.themePrice = themePrice;
		this.themeDescription = themeDescription;
	}
	public int getThemeId() {
		return themeId;
	}
	
	public void setThemeId(int themeId) {
		this.themeId = themeId;
	}
	public String getThemeName() {
		return themeName;
	}
	public void setThemeName(String themeName) {
		this.themeName = themeName;
	}
	public int getThemePrice() {
		return themePrice;
	}
	public void setThemePrice(int themePrice) {
		this.themePrice = themePrice;
	}
	public String getThemeDescription() {
		return themeDescription;
	}
	public void setThemeDescription(String themeDescription) {
		this.themeDescription = themeDescription;
	}
	
	
}

