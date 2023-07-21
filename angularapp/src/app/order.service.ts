import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel } from './order-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://8080-dcabbfbbebfcfdadebbecffccbcffabaefd.project.examly.io/user/order/AddOrder'; 

  constructor(private http: HttpClient) {}

  addOrder(order: OrderModel): Observable<any> {
    return this.http.post<any>(this.apiUrl, order);
  }
}
