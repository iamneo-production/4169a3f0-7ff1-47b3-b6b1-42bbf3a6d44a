import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftModel } from './gift-model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GiftService {

  private baseUrl="https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/getGift";
   private url2="https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/addGift";
   private url3="https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/deleteGift";
   private baseURL="https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/editGift";
  constructor(private httpClient: HttpClient) { }
  getAllGifts(): Observable<GiftModel[]>{
    return this.httpClient.get<GiftModel[]>(`${this.baseUrl}`);
  }
  addGifts(gift:GiftModel) :Observable<object>{
    return this.httpClient.post(`${this.url2}`,gift);
  }
  
 deleteGifts(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.url3}/${id}`);
}
updateGifts(id: number,gift:GiftModel): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,gift);
}
getById(id:number) :Observable<GiftModel>{
  return this.httpClient.get<GiftModel>(`${this.baseURL}/${id}`);
}
}
