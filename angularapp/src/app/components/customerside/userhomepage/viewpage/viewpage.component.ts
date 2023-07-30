import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.css']
})
export class ViewpageComponent implements OnInit {

  gifts: any[] = [];
  type:String;
  products: any[];
  private baseUrl = 'https://8080-afebfaaebebecfdadebbecffbdeeacabbcedbbb.project.examly.io/admin'

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.type=params['type'];
      if (this.type === 'occasion') {
        this.route.queryParams.subscribe(params => {
              const occasion = params['occasion'];
             this.getProductsByOccasion(occasion)
               .subscribe(data => {
               this.products = data;
                });
            });
      } else if (this.type === 'giftfinder') {
        this.route.queryParams.subscribe(params => {
        const filters = {
          occasion: params.occasion,
          recipient: params.recipient,
          minPrice: params.minPrice,
          maxPrice: params.maxPrice,
          gifttype: params.gifttype,
        };
        this.searchGifts(filters);
        });
      }else if(this.type==='recipient'){
        this.route.queryParams.subscribe(params => {
          const recipient = params['recipient'];
         this.getProductsByRecipient(recipient)
           .subscribe(data => {
           this.products = data;
            });
        });
      }
    });

  }

  searchGifts(filters: any): void {
    this.http.get<any[]>('https://8080-afebfaaebebecfdadebbecffbdeeacabbcedbbb.project.examly.io/admin/giftfinder', { params: filters })
      .subscribe(response => {
        this.gifts = response;
      });
  }
  
  private getProductsByOccasion(occasion: string): Observable<any> {
     const url = `${this.baseUrl}/filterByOccasion?occasion=${occasion}`;
      return this.http.get(url);
     }

     private getProductsByRecipient(recipient: string): Observable<any> {
      const url = `${this.baseUrl}/filterByRecipient?recipient=${recipient}`;
       return this.http.get(url);
      }
}

