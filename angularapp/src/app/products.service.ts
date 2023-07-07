import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 

  products = [
    {
      id: 1,
      name: 'Photo Frame',
      price: 400,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 4,
      occasion: 'Birthday', 
      recipient: 'Husband',  
      type: 'Photo Frames',
      sold: 50,
      dateTime: new Date('2023-05-28T09:00:00Z'),
      stock:20,
      description:'Photo frames to present your loved ones!'
    },
    {
      id: 2,
      name: 'serial lights',
      price: 300,
      image: 'https://www.perthpartyhire.com.au/wp-content/uploads/2015/02/Fairy-Lights-Hire-Perth.jpg',
      rating: 5,
      occasion: 'Birthday', 
      recipient: 'Wife',  
      type: 'lights',
      sold: 25,
      dateTime: new Date('2023-03-20T04:00:00Z'),
      stock:10,
      description:'Serial lights to present your loved ones!'
    },
    {
      id:3,
      name: 'Photo cube',
      price: 400,
      image: 'https://www.createngift.com/wp-content/uploads/2019/06/Personalized-Gifts-mobile-2.jpg',
      rating: 3,
      occasion: 'Mothers Day', 
      recipient: 'Brother',  
      type: 'frames',
      sold: 45,
      dateTime: new Date('2023-05-15T09:00:00Z'),
      revisedRate: 349,
      stock:25,
      description:'Photo cube to present your loved ones!'
    },{
      id: 4,
      name: 'Photo Frame',
      price: 200,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 4,
      occasion: 'Mothers Day', 
      recipient: 'Male friend',  
      type: 'photos',
      sold: 15,
      dateTime: new Date('2023-06-08T09:00:00Z'),
      revisedRate: 150,
      stock:8,
      description:'Photo frames to present your loved ones!'
    },
    {
      id: 5,
      name: 'Photo Frame',
      price: 200,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 2,
      occasion: 'wedding', 
      recipient: 'Female friends',  
      type: 'photos',
      sold: 34,
      dateTime: new Date('2023-04-10T09:00:00Z'),
      stock:32,
      description:'Photo frames to present your loved ones!'
    },
    {
      id:6,
      name: 'Photo cube',
      price: 500,
      image: 'https://www.createngift.com/wp-content/uploads/2019/06/Personalized-Gifts-mobile-2.jpg',
      rating: 4,
      occasion: 'Mothers Day', 
      recipient: 'Mother',  
      type: 'photos',
      sold: 56,
      dateTime: new Date('2023-05-20T10:00:00Z'),
      revisedRate: 420,
      stock:4,
      description:'Photo cube to present your loved ones!'
    },
    {
      id:7,
      name: 'Photo Frame',
      price: 1000,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 5,
      occasion: 'wedding', 
      recipient: 'Sister',  
      type: 'photos',
      sold: 12,
      dateTime: new Date('2023-05-08T09:00:00Z'),
      stock:5,
      description:'Photo frames to present your loved ones!'
    },
    {
      id:8,
      name: 'Photo cube',
      price: 500,
      image: 'https://www.createngift.com/wp-content/uploads/2019/06/Personalized-Gifts-mobile-2.jpg',
      rating: 5,
      occasion: 'Mothers Day', 
      recipient: 'Mother',  
      type: 'photos',
      sold: 56,
      dateTime: new Date('2023-05-20T10:00:00Z'),
      revisedRate: 320,
      stock:7,
      description:'Photo cube to present your loved ones!'
    },
    {
      id:9,
     name: 'Photo cube',
      price: 400,
      image: 'https://www.createngift.com/wp-content/uploads/2019/06/Personalized-Gifts-mobile-2.jpg',
      rating: 3,
      occasion: 'Birthday', 
      recipient: 'Brother',  
      type: 'frames',
      sold: 45,
      dateTime: new Date('2023-05-15T09:00:00Z'),
      revisedRate: 349,
      stock:25,
      description:'Photo cube to present your loved ones!'
    },
    {
      id:10,
      name: 'Photo cube',
      price: 400,
      image: 'https://www.createngift.com/wp-content/uploads/2019/06/Personalized-Gifts-mobile-2.jpg',
      rating: 3,
      occasion: 'wedding', 
      recipient: 'Brother',  
      type: 'frames',
      sold: 45,
      dateTime: new Date('2023-05-15T09:00:00Z'),
      revisedRate: 349,
      stock:25,
      description:'Photo frames to present your loved ones!'
    },
    {
      id:11,
      name: 'serial lights',
      price: 200,
      image: 'https://www.perthpartyhire.com.au/wp-content/uploads/2015/02/Fairy-Lights-Hire-Perth.jpg',
      rating: 5,
      occasion: 'wedding', 
      recipient: 'Father',  
      type: 'photos',
      sold: 39,
      dateTime: new Date('2023-06-01T01:00:00Z'),
      stock:27,
      description:'Serial lights to present your loved ones!'
    },
    {
      id:12,
      name: 'Photo Frame',
      price: 400,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 4,
      occasion: 'Birthday', 
      recipient: 'Husband',  
      type: 'Photo Frames',
      sold: 50,
      dateTime: new Date('2023-05-28T09:00:00Z'),
      stock:20,
      description:'Photo frames to present your loved ones!'
    },
    
  ];


  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(productId: any){
    const product = this.products.find(p => p.id === productId)!;
    return of(product);
  }

  getCartItems() {
    return of(Object.values(JSON.parse(localStorage.getItem("cartItems") || "{}")));
  }

  getItemFromCart(productId: number) {
    const cart = JSON.parse(localStorage.getItem("cartItems") || "{}");
    return of(cart[productId]);
  }

  addToCart(product: Product, orderDetails: any){
    const cart = JSON.parse(localStorage.getItem("cartItems") || "{}");
    cart[product.id] = {
      product,
      orderDetails
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
    return of(true);
  }

  removeFromCart(productId: number){
    const cart = JSON.parse(localStorage.getItem("cartItems") || "{}");
    cart[productId] = undefined;
    localStorage.setItem("cartItems", JSON.stringify(cart));
    return of(true);
  }
}
