import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  items: any[]=[];
  cartTotal: number = 0;

  constructor(private router: Router, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchCartItems();
  }

  fetchCartItems() {
    this.productsService.getCartItems().subscribe(cartItems => {
      this.items = cartItems
      this.updateCartTotal();
    });
  }
  updateCartTotal() {
    this.cartTotal = this.items.reduce((sum: number, item: any) => (parseFloat(item.orderDetails.orderPrice) * item.orderDetails.productQuantity) + sum, 0);
  }

  deleteProduct(productId: number): void {
    this.productsService.removeFromCart(productId).subscribe(() => {
      this.fetchCartItems();
    });
  }
 
  editProduct(productId: number): void {
    this.router.navigate(['/customerorder', productId]);
  }
  updateQuantity(item: any, quantity: number) {
    item.orderDetails.productQuantity = quantity;
    this.productsService.addToCart(item.product, item.orderDetails).subscribe();
    this.updateCartTotal();
  }

  payment(){
    this.router.navigate(['/paymentpage'])
  }
  
  
}