import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  gifts=[
    {
      "orderId" : "1",
      "userId"  :"User1",
      "giftName":"Wooden frame",
      "giftPrice": "200",
      "giftQuantity": "3pcs",
      },
    {
        "orderId" : "2",
        "userId"  :"User2",
        "giftName":"Wooden frame",
        "giftPrice": "200",
        "giftQuantity": "5pcs",
        },
        {
          "orderId" : "3",
          "userId"  :"User3",
          "giftName":"Wooden frame",
          "giftPrice": "200",
          "giftQuantity": "7pcs",
          },
          {
            "orderId" : "4",
            "userId"  :"User4",
            "giftName":"Wooden frame",
            "giftPrice": "200",
            "giftQuantity": "10pcs",
            },
            {
              "orderId" : "4",
              "userId"  :"User4",
              "giftName":"Wooden frame",
              "giftPrice": "200",
              "giftQuantity": "10pcs",
              },
              {
                "orderId" : "4",
                "userId"  :"User4",
                "giftName":"Wooden frame",
                "giftPrice": "200",
                "giftQuantity": "10pcs",
                },
                {
                  "orderId" : "4",
                  "userId"  :"User4",
                  "giftName":"Wooden frame",
                  "giftPrice": "200",
                  "giftQuantity": "10pcs",
                  },
                  {
                    "orderId" : "4",
                    "userId"  :"User4",
                    "giftName":"Wooden frame",
                    "giftPrice": "200",
                    "giftQuantity": "10pcs",
                    },
                    {
                      "orderId" : "4",
                      "userId"  :"User4",
                      "giftName":"Wooden frame",
                      "giftPrice": "200",
                      "giftQuantity": "10pcs",
                      },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
