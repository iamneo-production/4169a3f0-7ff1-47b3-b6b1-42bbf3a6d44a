export interface Product {
    id: number ;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    occasion: string;
    revisedRate?:number;
    recipient: string;  
    type: string;
    sold: number;
    dateTime: Date;
    stock:number;
  }