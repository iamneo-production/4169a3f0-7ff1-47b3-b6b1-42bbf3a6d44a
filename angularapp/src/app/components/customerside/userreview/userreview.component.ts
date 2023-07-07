import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Review {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-userreview',
  templateUrl: './userreview.component.html',
  styleUrls: ['./userreview.component.css']
})

export class UserreviewComponent implements OnInit{
  
  review: Review = {
    name: '',
    email: '',
    rating: 0,
    comment: ''
  };
  reviewForm= new FormGroup({
    revb: new FormControl('',Validators.required)
    
    
  })

  get revb(){
    return this.reviewForm.get('revb')
  }

  ngOnInit(): void {
  }
  

  }

  
