import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  username: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  showPopup: boolean = false;

  validateUsername() {
    if (this.username.trim() === '') {
      this.errorMessage = 'Enter username';
    } else if (this.username.length < 6) {
      this.errorMessage = 'At least 6 letters';
    } else {
      this.errorMessage = '';
    }
  }

  validateEmail() {
    if (this.email.trim() === '') {
      this.errorMessage = 'Enter your mailid';
    } else {
      this.errorMessage = '';
    }
  }

  validatePhoneNumber() {
    if (this.phoneNumber.trim() === '') {
      this.errorMessage = 'Enter your phone number';
    } else if (this.phoneNumber.length < 10) {
      this.errorMessage = 'Enter correct number';
    } else {
      this.errorMessage = '';
    }
  }

  validatePassword() {
    if (this.password.trim() === '') {
      this.errorMessage = 'Enter password';
    } else {
      this.errorMessage = '';
    }
  }

  validateConfirmPassword() {
    if (this.confirmPassword !== this.user.password) {
      this.errorMessage = "Passwords don't match";
    } else {
      this.errorMessage = '';
    }
  }

  registerUser(): void {
    if (
      this.username.trim() !== '' &&
      this.username.length >= 6 &&
      this.email.trim() !== '' &&
      this.phoneNumber.trim() !== '' &&
      this.phoneNumber.length >= 10 &&
      this.password.trim() !== '' &&
      this.confirmPassword === this.password
    ) {
      this.showPopup = true;
    }
    this.userService.addUser(this.user)
      .subscribe(() => {
        this.user = new User(); // Clear the form after successful registration
      });

  }

  hidePopup() {
    this.showPopup = false;
  }
  register(){
    alert('Registered Successful');
  }
}