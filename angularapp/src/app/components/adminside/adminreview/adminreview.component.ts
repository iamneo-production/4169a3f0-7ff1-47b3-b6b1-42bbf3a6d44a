import { Component } from '@angular/core';

@Component({
  selector: 'app-adminreview',
  templateUrl: './adminreview.component.html',
  styleUrls: ['./adminreview.component.css']
})
export class AdminreviewComponent {
  listdata:any=[
    {
      "name":"Harry",
      "product":"Personalized Mug",
      "ratings":"4",
      "feedback":"Very easy to customise product and delivery is also super fast. Loved the entire buying experience"
    },
    {
      "name":"Himawari",
      "product":"Personalised 3D Moon Lamp",
      "ratings":"5",
      "feedback":"Wow what a product ! Loved it!!"
    },
    {
      "name":"Shinchan",
      "product":"Wooden Photo Frame",
      "ratings":"4.9",
      "feedback":"Good and as expected was the same.loved it!!"
    },
    {
      "name":"Kazama",
      "product":"Personalised Photo Collage",
      "ratings":"4.6",
      "feedback":"Value-for-money"
    }
  ]
starRating = 0;
}
