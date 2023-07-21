import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly API_URL = 'https://8080-dcabbfbbebfcfdadebbecffccbcffabaefd.project.examly.io/admin';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/getGift`);
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/getProductDetails/${productId}`);
  }

  addToCart(productId: number, orderDetails: any): Observable<any> {
    return this.http.post(`${this.API_URL}/addToCart/${productId}`, orderDetails);
  }

  getCartItems(): Observable<any> {
    return this.http.get<any>(`/getCartItems`);
  }

  removeFromCart(productId: number): Observable<any> {
    return this.http.delete(`https://8080-dcabbfbbebfcfdadebbecffccbcffabaefd.project.examly.io//user/order/deleteOrder/${productId}`);
  }
}
