import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    password: ''
  };
  errorMessage = '';

  constructor(private router: Router, private userService: UserService, private loginService: LoginService) {} // Inject AuthService

  ngOnInit(): void {
    
  }

  navigateToRegister() {
    this.router.navigate(['/signup']);
  }

  navigateTouserhomepage() {
    this.router.navigate(['/userhomepage']);
  }

  loginUser(): void {
    if (this.loginData.email === 'admin@gmail.com' && this.loginData.password === 'admin') {
      this.userService.setLoggedInStatus(true);
      this.userService.setUserRole('admin');
      this.router.navigate(['/admin']); // Redirect to admin page
    } else {
      this.loginService.login(this.loginData.email, this.loginData.password)
        .subscribe(
          (response) => {
            // Login successful, navigate to user homepage
            this.userService.setLoggedInStatus(true);
            this.userService.setUserRole('user');
            this.router.navigate(['/userhomepage']);
          },
          (error) => {
            // Login failed, display error message
            this.errorMessage = 'Incorrect email or password.';
          }
        );
    }
  }
}