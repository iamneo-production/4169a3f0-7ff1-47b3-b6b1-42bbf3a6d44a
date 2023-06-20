import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {
  //Required array declarations
  products: any[];
  bestSellers: any[] = [];
  trending: any[] = [];
  topNewArrivals: Product[] = [];
  occasionProducts: Product[] = [];

 //Injecting product service and Router to userhompage component
  constructor(private router: Router,private productsService: ProductsService) { } 
  

  ngOnInit(): void {
   //Fetch list of products and assign to products property of current component
    this.products = this.productsService.getProducts(); 
   // calling the methods defined below in the current component
    this.findBestSellers(); 
    this.getTopNewArrivals();
    this.trendingGifts();
    this.getOccasionProducts('Mothers Day');
    
  }
  

  //To naviagte to placeorder page on clicking addtocart
  addToCart() {
    this.router.navigate(['/customerorder']);
  }


  // To get an array of size equal to given product rating (filled stars)
  getFilledStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  //To get an array of size equal to (5-rating) unfilled stars
  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }

  // navigating to viewpage and sending occassion details in query param for occasion scroller
  navigateToViewPage(occasion: string): void {
    this.router.navigate(['/viewpage'], { queryParams: { occasion,type:'occasion'} });
  }


// Fetching products with best ratings
  findBestSellers(): void {
    let highestRating = -1;
    for (const product of this.products) {
      if (product.rating > highestRating) {
        highestRating = product.rating;
        this.bestSellers = [product];
      } else if (product.rating === highestRating) {
        this.bestSellers.push(product);
      }
    }
  } 

  // Fetching new arrivals based on date and time
  getTopNewArrivals(): void {
    // Sort the products array based on the dateTime field in descending order
    this.products.sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());

    // Get the top 4 new arrival products
    this.topNewArrivals = this.products.slice(0, 4);
  }



  //Navigating to viewpage and passing recipient details on queryparam for relation scroller
  MoveToViewPage(recipient: string): void {
    this.router.navigate(['/viewpage'], { queryParams: { recipient,type:'recipient'} });
  }



  //To fetch the most sold items in products array
  trendingGifts(): void {
    this.trending = [];
  
    // Sort products by sold count in descending order
    this.products.sort((a, b) => b.sold - a.sold);
  
    // Get the top 4 most sold items
    const topItems = this.products.slice(0, 4);
  
    // Add the top items to the trending array
    for (const product of topItems) {
      this.trending.push(product);
    }
  }



  //filter occassion based on spl occasion 
  getOccasionProducts(occasion: string): void {
    this.occasionProducts = this.products.filter(product => product.occasion === occasion);
  }



  //To calculate discount about for spl occasions offers
  getDiscountPercentage(originalRate: number, revisedRate: number): number {
    const discount = (originalRate - revisedRate) / originalRate * 100;
    return Math.round(discount);
  }
  
  
  
  

}
