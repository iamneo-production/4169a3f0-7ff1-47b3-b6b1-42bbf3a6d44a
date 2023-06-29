import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  viewType: string;
  products: any[];
  selectedOccasion: string = '';
  filteredProducts: Product[] = [];
  filteredGifts: Product[] = [];
  queryParams: any;
  filteredRecipient: Product[] = [];
  selectedRecipient: string = '';

  constructor(private router: Router,private route: ActivatedRoute,private productsService: ProductsService) { }

  ngOnInit(): void {
  
    this.route.queryParams.subscribe(params => {  //retrieving queryparams from url
      this.viewType = params['type'];
      this.productsService.getProducts().subscribe((products: Product[]) => {
        this.products = products;
      });  //assigning product data from service to products property of current component
      
      if (this.viewType === 'occasion') {   //conditional statement to decide on which segment to run on viewpage
        this.selectedOccasion = params['occasion'];
        this.filterProducts();
      } else if (this.viewType === 'giftfinder') {
        this.queryParams = params;
        this.filterGifts();
      } else if (this.viewType === 'recipient') {
        this.selectedRecipient = params['recipient'];
        this.filterRecipient();
    }});
  }

  addToCart(productId: number) {
    this.router.navigate(['/customerorder', productId]);
  }

  // To get an array of size equal to given product rating (filled stars)
  getFilledStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  //To get an array of size equal to (5-rating) unfilled stars
  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }

  /*scroller filter based on ocassion*/

  filterProducts(): Product[] {
    return this.filteredProducts = this.products.filter(
      (product: Product) => {
        return (product.occasion === this.selectedOccasion);
      }
    );
  }

/*gift finder filter based on 4 parameter*/

  filterGifts(): Product[] {
    return this.filteredGifts = this.products.filter(
      (gift: Product) => {
      return (
        (this.queryParams.occasion === '' || gift.occasion === this.queryParams.occasion) &&
        (this.queryParams.recipient === '' || gift.recipient === this.queryParams.recipient) &&
        (this.queryParams.price === '' || this.isPriceInRange(gift.price, this.queryParams.price)) &&
        (this.queryParams.giftType === '' || gift.type === this.queryParams.giftType)
      );

      });
  }
  //splitting the price range, extract min and max,convert to number and checking if price falls within the given range and return true or false
  isPriceInRange(price: number, range: string): boolean {
      const [min, max] = range.split('-').map(Number);
      return price >= min && price <= max;
    }

    /*scroller filter based on recipient*/ 
    filterRecipient(): Product[] {
      return this.filteredRecipient = this.products.filter(
        (product: Product) => {
          return (product.recipient === this.selectedRecipient);
        }
      );
    }



}

