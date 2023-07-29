import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {
  bestSellers: Product[];
  topNewArrivals: Product[];
  trendingItems: Product[];
  fathersDayProducts: Product[];
  distinctOccasions: String[];
  distinctRecipient:String[];
  // i:number=1;

  constructor(private router:Router,private http: HttpClient) { }

  ngOnInit(): void {
    
    this.getBestSellers();
    this.loadNewestArrivalProducts();
    this.fetchTrendingItems();
    this.getFathersDayProducts();
    this.getDistinctOccasions();
    this.getDistinctRecipient();
  }

  getImageUrlOccasion(occasion: string): string {
    const imageUrlMap: { [key: string]: string } = {
      'Birthday': 'https://getwallpapers.com/wallpaper/full/9/b/5/282243.jpg',
      'wedding': 'https://getwallpapers.com/wallpaper/full/2/3/f/1128636-amazing-hd-wedding-backgrounds-2160x1440.jpg',
      'Aniversary': 'https://wallpapercave.com/wp/v5rXPgi.jpg',
      'Baby shower': 'https://neolittle.com/wp-content/uploads/2019/12/Best-Places-to-Throw-a-Baby-Shower-15-BEST-Original-Places-In-2020-scaled.jpg',
      'House warming': 'https://i.ytimg.com/vi/4FIG06qZ0as/maxresdefault.jpg',
      'raksha bandhan': 'https://fthmb.tqn.com/JN7H6NErzzHMM8xb0Iwq1IppNVU=/2122x1415/filters:fill(auto,1)/GettyImages-109378462-56a484113df78cf77282cc34.jpg',
      'Fathers day': 'https://im.indiatimes.in/content/2023/Jun/happy-fathers-day-cards4_648e0e6579551.jpg?w=725&h=527&cc=1'
    };

    return imageUrlMap[occasion];
  }

  getImageUrlRecipient(recipient: string): string {
    const imageUrlMap: { [key: string]: string } = {
      'Husband': 'https://crafterscupboard.com.au/image/cache/catalog/Stock/A2Z%20Scraplets/Husband%20Script%20Word-228x228.jpg',
      'Father': 'https://cdn11.bigcommerce.com/s-m28of/images/stencil/500x659/products/1083/3969/weldedwordfather-bold__40494.1577479135.png?c=2',
      'Brother': 'https://cdn.scrapbook.com/products/cache/SBC_unp-8013_0.jpg',
      'Wife': 'https://cdn10.bigcommerce.com/s-7fcgcq/products/4455/images/1306/3235-Wife__85427.1444427248.1280.1280.JPG?c=2',
      'Mother': 'https://static.vecteezy.com/system/resources/previews/000/370/036/non_2x/floral-summer-text-mom-vector-illustration-hand-drawn-capital-uppercase-with-flowers-and-leaves-and-white-calligraphy-letters-on-red-background-for-mother-s-day.jpg',
      'Friend': 'https://cdn1.vectorstock.com/i/1000x1000/86/75/friend-word-text-with-handwritten-rainbow-vibrant-vector-23928675.jpg',
      'Sister': 'https://i.pinimg.com/236x/60/e0/6f/60e06f90964e3545db28e8e9f69df784--sisters-images-the-words.jpg'
      
    };

    return imageUrlMap[recipient];
  }

  navigateToViewPageOccasion(occasion: string): void {
    this.router.navigate(['/viewpage'], { queryParams: { occasion,type:'occasion'} });
  }

  navigateToViewPageRecipient(recipient: string): void {
    this.router.navigate(['/viewpage'], { queryParams: { recipient,type:'recipient'} });
  }

  getDistinctOccasions(): void {
    this.http.get<String[]>('https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/occasions')
      .subscribe(occasions => {
        this.distinctOccasions = occasions;
        });
      
  }

  getDistinctRecipient(): void {
    this.http.get<String[]>('https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/recipient')
      .subscribe(recipient => {
        this.distinctRecipient = recipient;
        });
      
  }

  addToCart(productId: number) {
    this.router.navigate(['/customerorder', productId]);
  }

  getFilledStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }


  getBestSellers() {
    const url = 'https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/best-sellers';
    this.http.get<Product[]>(url)
      .subscribe((products: Product[]) => {
        this.bestSellers = products;
      });
      console.log(this.bestSellers);
  }

  loadNewestArrivalProducts() {
    const url = 'https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/new-arrival'; 

    this.http.get<Product[]>(url).subscribe(
      products => {
        this.topNewArrivals = products;
      },
      error => {
        console.log('Error retrieving products: ', error);
      }
    );
    console.log(this.topNewArrivals);
  }
  fetchTrendingItems() {
    this.http.get<Product[]>('https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/trending').subscribe(
      (response) => {
        this.trendingItems = response;
      },
      (error) => {
        console.error('Error fetching trending items:', error);
      }
    );
  }
  getFathersDayProducts() {

    this.http.get<any[]>('https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/fathers-day').subscribe(
        (response) => {
          this.fathersDayProducts = response;
        },
        (error) => {
          console.error(error);
        }
      );
  }
  getDiscountPercentage(originalRate: number, revisedRate: number): number {
    const discount = (originalRate - revisedRate) / originalRate * 100;
    return Math.round(discount);
  }

}


