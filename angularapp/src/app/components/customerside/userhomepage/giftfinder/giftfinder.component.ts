import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giftfinder',
  templateUrl: './giftfinder.component.html',
  styleUrls: ['./giftfinder.component.css']
})
export class GiftfinderComponent {

  selectedRating: any;

  constructor(private router: Router) { 
    
  }
  selectedOccasion: string = '';
  selectedReceipt: string = '';
  selectedPriceRange: string = '';
  selectedGiftType: string = '';

  search(): void {

      const [min, max] = this.selectedPriceRange.split('-').map(Number);

    const queryParams = {
      occasion: this.selectedOccasion,
      recipient: this.selectedReceipt,
      minPrice:min,
      maxPrice:max,
      gifttype: this.selectedGiftType,
      type:'giftfinder'
    };

    this.router.navigate(['/viewpage'], { queryParams });
  }


}

