import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private basURL = "https://8080-daadfdafdcfdadebbecffccbcffabaefd.project.examly.io/admin/getreview";
  private url2="https://8080-daadfdafdcfdadebbecffccbcffabaefd.project.examly.io/user/addreview";
  constructor(private httpClient: HttpClient) { }
   
  getCustomerList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${this.basURL}`);
  }

  createCustomer(customer: Customer): Observable<Object>{
    return this.httpClient.post(`${this.url2}`,customer);
  }
}
