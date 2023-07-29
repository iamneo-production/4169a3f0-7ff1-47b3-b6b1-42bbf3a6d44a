import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/order-model';
import {OrderService} from 'src/app/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  gifts: OrderModel[]=[];
constructor(private orderService: OrderService){
}
giftquantity=1;
ngOnInit(): void {
  this.getorders();
} 
private getorders(){
  this.orderService.getOrderList().subscribe(data=>{
    this.gifts=data;
});

}}
