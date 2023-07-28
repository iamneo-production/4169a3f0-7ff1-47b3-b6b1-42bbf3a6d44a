import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/order-model';
import {OrderService} from 'src/app/order.service';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  gifts: OrderModel[]=[];
constructor(private orderService: OrderService,private userService: UserService, private router: Router){
}
ngOnInit(): void {
  this.getorders();
} 
private getorders(){
  this.orderService.getOrderList().subscribe(data=>{
    this.gifts=data;
});

}logout(): void {
  this.userService.logout();
  this.router.navigate(['/login']);
}}
