
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {

 
  selectedMethod: string = 'card';
  tColorA: string = '#FFDB58';
  tColorB: string = '#444';
  tColorC: string = '#444';
  iconA: string = '#FFDB58';
  iconB: string = '#aaa';
  iconC: string = '#aaa';
  cDetailsVisible: boolean = false;
  showCardPayment: boolean = true;
  showInternetBanks: boolean = false;
  paymentForm= new FormGroup({
    name: new FormControl('',Validators.required),
    number: new FormControl('',Validators.required),
    date: new FormControl('',Validators.required),
    cvv: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
    
  })

  get name(){
    return this.paymentForm.get('name')
  }
  get number(){
    return this.paymentForm.get('number')
  }
  get date(){
    return this.paymentForm.get('date')
  }
  get cvv(){
    return this.paymentForm.get('cvv')
  }
  get email(){
    return this.paymentForm.get('email')
  }
  ngOnInit() {
  }
  selectPaymentMethod(method: string) {
    this.selectedMethod = method;
  }

  doFun() {
    this.tColorA = '#FFDB58';
    this.tColorB = '#444';
    this.tColorC = '#444';
    this.iconA = '#FFDB58';
    this.iconB = '#aaa';
    this.iconC = '#aaa';
    this.cDetailsVisible = true;
  }

  doFunA() {
    this.tColorA = '#444';
    this.tColorB = '#FFDB58';
    this.tColorC = '#444';
    this.iconA = '#aaa';
    this.iconB = '#FFDB58';
    this.iconC = '#aaa';
    this.cDetailsVisible = false;
  }

  doFunB() {
    this.tColorA = '#444';
    this.tColorB = '#444';
    this.tColorC = '#FFDB58';
    this.iconA = '#aaa';
    this.iconB = '#aaa';
    this.iconC = '#FFDB58';
    this.cDetailsVisible = false;
  }


}
