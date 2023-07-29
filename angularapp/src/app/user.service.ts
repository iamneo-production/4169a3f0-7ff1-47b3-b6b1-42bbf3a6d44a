import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiUrl = 'https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/users';
  userRole: string;
  isLoggedInFlag: boolean;




  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl,user);
  }
  // Method to set user role (you can call this method after successful login)
  setUserRole(role: string): void {
    this.userRole = role;
  }

  // Method to get user role
  getUserRole(): string {
    return this.userRole;
  }

  // Method to set login status (you can call this method after successful login/logout)
  setLoggedInStatus(status: boolean): void {
    this.isLoggedInFlag = status;
  }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    return this.isLoggedInFlag;
  }
  logout(): void {
    this.isLoggedInFlag = false;
    this.userRole = '';
  }

}