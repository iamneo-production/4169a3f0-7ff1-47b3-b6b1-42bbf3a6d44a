import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private basURL = "https://8080-dabbcfcbdefcfdadebbecffccbcffabaefd.project.examly.io/";
  constructor(private httpClient: HttpClient) { }
   
  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.basURL}`);
  }

  createCustomer(customer: Customer): Observable<Object>{
    return this.httpClient.post(`${this.basURL}`,customer);
  }
}
