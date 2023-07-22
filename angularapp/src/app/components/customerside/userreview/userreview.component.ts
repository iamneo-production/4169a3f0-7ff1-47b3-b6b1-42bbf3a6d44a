import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userreview',
  templateUrl: './userreview.component.html',
  styleUrls: ['./userreview.component.css']
})

export class UserreviewComponent implements OnInit{
  
  customer: Customer = new Customer() ;
  constructor(private customerService: CustomerService, 
    private router: Router){

  }
  ngOnInit(): void {
      
  }
  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe(data =>{
      console.log(data);
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
  }

  

  }

  
