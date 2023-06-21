import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products = [
    {
      name: 'Photo Frame',
      price: 400,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 4,
      occasion: 'Birthday', 
      recipient: 'Husband',  
      type: 'Photo Frames',
      sold: 50,
      dateTime: new Date('2023-05-28T09:00:00Z'),
      stock:20
    },
    {
      name: 'serial lights',
      price: 300,
      image: 'https://www.perthpartyhire.com.au/wp-content/uploads/2015/02/Fairy-Lights-Hire-Perth.jpg',
      rating: 5,
      occasion: 'Birthday', 
      recipient: 'Husband',  
      type: 'lights',
      sold: 25,
      dateTime: new Date('2023-03-20T04:00:00Z'),
      stock:10
    },
    {
      name: 'Photo cube',
      price: 400,
      image: 'https://www.createngift.com/wp-content/uploads/2019/06/Personalized-Gifts-mobile-2.jpg',
      rating: 3,
      occasion: 'Mothers Day', 
      recipient: 'Father',  
      type: 'frames',
      sold: 45,
      dateTime: new Date('2023-05-15T09:00:00Z'),
      revisedRate: 349,
      stock:25
    },{
      name: 'Photo Frame',
      price: 200,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 4,
      occasion: 'Mothers Day', 
      recipient: 'Husband',  
      type: 'photos',
      sold: 15,
      dateTime: new Date('2023-06-08T09:00:00Z'),
      revisedRate: 150,
      stock:8
    },
    {
      name: 'Photo Frame',
      price: 200,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 2,
      occasion: 'wedding', 
      recipient: 'Female friends',  
      type: 'photos',
      sold: 34,
      dateTime: new Date('2023-04-10T09:00:00Z'),
      stock:32
    },
    {
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
      stock:4
    },
    {
      name: 'Photo Frame',
      price: 1000,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 5,
      occasion: 'wedding', 
      recipient: 'Sister',  
      type: 'photos',
      sold: 12,
      dateTime: new Date('2023-05-08T09:00:00Z'),
      stock:5
    },
    {
      name: 'Photo cube',
      price: 500,
      image: 'https://www.createngift.com/wp-content/uploads/2019/06/Personalized-Gifts-mobile-2.jpg',
      rating: 5,
      occasion: 'Mothers Day', 
      recipient: 'Mother',  
      type: 'photos',
      sold: 32,
      dateTime: new Date('2023-05-20T10:00:00Z'),
      revisedRate: 320,
      stock:7
    },
    {
     name: 'Photo cube',
      price: 400,
      image: 'https://www.createngift.com/wp-content/uploads/2019/06/Personalized-Gifts-mobile-2.jpg',
      rating: 3,
      occasion: 'Birthday', 
      recipient: 'Husband',  
      type: 'frames',
      sold: 45,
      dateTime: new Date('2023-05-15T09:00:00Z'),
      revisedRate: 349,
      stock:25
    },
    {
    name: 'Photo cube',
      price: 400,
      image: 'https://www.createngift.com/wp-content/uploads/2019/06/Personalized-Gifts-mobile-2.jpg',
      rating: 3,
      occasion: 'wedding', 
      recipient: 'Son',  
      type: 'frames',
      sold: 45,
      dateTime: new Date('2023-05-15T09:00:00Z'),
      revisedRate: 349,
      stock:25
    },
    {
      name: 'serial lights',
      price: 200,
      image: 'https://www.perthpartyhire.com.au/wp-content/uploads/2015/02/Fairy-Lights-Hire-Perth.jpg',
      rating: 5,
      occasion: 'wedding', 
      recipient: 'husband',  
      type: 'photos',
      sold: 59,
      dateTime: new Date('2023-06-01T01:00:00Z'),
      stock:27
    },
    {
      name: 'Photo Frame',
      price: 800,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 4,
      occasion: 'Birthday', 
      recipient: 'Father',  
      type: 'Photo Frames',
      sold: 60,
      dateTime: new Date('2023-05-28T09:00:00Z'),
      stock:20
    },
    {
    name: 'serial lights',
      price: 100,
      image: 'https://www.perthpartyhire.com.au/wp-content/uploads/2015/02/Fairy-Lights-Hire-Perth.jpg',
      rating: 3,
      occasion: 'Anniversary', 
      recipient: 'Son',  
      type: 'lights',
      sold: 25,
      dateTime: new Date('2023-03-20T04:00:00Z'),
      stock:10
    },
    {
      name: 'Photo Frame',
      price: 800,
      image: 'https://i.pinimg.com/originals/89/f2/a5/89f2a59a07d159c7c0b20ea4ff672af9.jpg',
      rating: 4,
      occasion: 'rakshabandan', 
      recipient: 'wife',  
      type: 'Photo Frames',
      sold: 10,
      dateTime: new Date('2023-05-28T09:00:00Z'),
      stock:20
    },
    
  ];


  getProducts(): any[] {
    return this.products;
  }
}
