import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://8080-afebfaaebebecfdadebbecffbdeeacabbcedbbb.project.examly.io/login';

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, { email, password });
  }
}