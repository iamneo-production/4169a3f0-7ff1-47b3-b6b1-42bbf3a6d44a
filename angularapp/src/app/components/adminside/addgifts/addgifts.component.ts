import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GiftModel } from 'src/app/gift-model';
import { GiftService } from 'src/app/gift.service';

@Component({
  selector: 'app-addgifts',
  templateUrl: './addgifts.component.html',
  styleUrls: ['./addgifts.component.css']
})
export class AddgiftsComponent {
  listdata:GiftModel[]
  name:any;
  price:any;
  image:any;
  quantity:any;
  details:any;
  occasion:any;
  rating:any;
  sold:any;
  datetime:any;
  discount:any;
  recipient:any;
  gifts:GiftModel=new GiftModel();

  constructor( private giftservice :GiftService,private router:Router){}
  ngOnInit():void{
    this.getAllgifts();
    //const urlParams = new URLSearchParams(this.urll);

 }
 private getAllgifts() {
    this.giftservice.getAllGifts().subscribe(data=>{
      this.listdata=data;
    })
    console.log(this.listdata);
  }
  deleteRow(id:number){
    /*var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.listdata.splice(item ,1);
      //this.arr.pop(item);
    }  */
  this.giftservice.deleteGifts(id).subscribe(data=>{
    console.log(data);
  })
  var msg = confirm("Deleted successfully");
  }
  submit(){
    console.log(this.gifts);
    this.savegifts();
  }
  savegifts() {
    //throw new Error('Method not implemented.');
    this.giftservice.addGifts(this.gifts).subscribe(data=>{
      console.log(data);
    })
    var msg = confirm("Added successfully");
    
  }
  updateRow(id:number)
  {
    console.log(id);
    this.router.navigate(['update', id]);
  }
}
