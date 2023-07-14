import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giftfinder',
  templateUrl: './giftfinder.component.html',
  styleUrls: ['./giftfinder.component.css']
})
export class GiftfinderComponent implements OnInit {


  constructor(private router: Router) { 
    
  }
  selectedOccasion: string = '';
  selectedReceipt: string = '';
  selectedPriceRange: string = '';
  selectedGiftType: string = '';
  selectedRating: any;


  ngOnInit(): void {
  }

  //navigating to viewpage and sending the selected users choice as queryparams 

  search(): void {
    const queryParams = {
      occasion: this.selectedOccasion,
      recipient: this.selectedReceipt,
      price: this.selectedPriceRange.toString(),
      giftType: this.selectedGiftType,
      type:'giftfinder'
    };

    this.router.navigate(['/viewpage'], { queryParams });
  }

}

