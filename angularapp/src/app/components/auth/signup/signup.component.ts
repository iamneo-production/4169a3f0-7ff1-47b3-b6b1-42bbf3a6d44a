import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

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
      this.errorMessage = 'ENTER USERNAME';
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
    if (this.confirmPassword !== this.password) {
      this.errorMessage = "Passwords don't match";
    } else {
      this.errorMessage = '';
    }
  }

  submitForm() {
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
  }

  hidePopup() {
    this.showPopup = false;
  }
  register(){
    alert('Registered Succesful');
  }
}
