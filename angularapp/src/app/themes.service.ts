import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {


  constructor(private httpClient: HttpClient) {}

  API='https://8080-afebfaaebebecfdadebbecffbdeeacabbcedbbb.project.examly.io/admin';
   public addTheme(themeData:Theme):Observable<Object>{
     return this.httpClient.post(this.API + '/addTheme' ,themeData,{responseType:'text'});
   }

   public getTheme():Observable<Object>{
    return this.httpClient.get(this.API + '/getTheme');
   }

   public deleteTheme(id: any):Observable<Object>{
    return this.httpClient.delete(this.API + '/deleteTheme/' +id, {responseType: 'text'});
   }
   
   public editTheme(theme: any):Observable<Object>{
    return this.httpClient.put(this.API + '/editTheme/' + theme.themeId,theme);
   }
}
