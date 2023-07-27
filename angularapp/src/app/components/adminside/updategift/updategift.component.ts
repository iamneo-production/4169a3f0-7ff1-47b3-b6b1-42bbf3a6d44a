import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiftModel } from 'src/app/gift-model';
import { GiftService } from 'src/app/gift.service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-updategift',
  templateUrl: './updategift.component.html',
  styleUrls: ['./updategift.component.css']
})
export class UpdategiftComponent {
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
  id:number;
  /*userform:FormGroup;
  search:any;
  listdata:any;
  constructor(private fb:FormBuilder,private route:Router){
    this.listdata=[];
  this.userform=this.fb.group({
  name:['',Validators.required],
    price:['',Validators.required],
    image:['',Validators.required],
    quantity:['',Validators.required],
    details:['',Validators.required]
    
  })
  }
  update(){
    this.listdata.push(this.userform.value);
    var delBtn = confirm("Updated successfully");
    //this.arr.push(this.userform.value);
    //console.log(this.arr);
    //this.route.navigate(['view-table']);
  }*/
  constructor( private gift: GiftService,private router:Router,private route:ActivatedRoute,private userService: UserService){
    
  }


  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.gift.getById(this.id).subscribe(data => {
      this.gifts = data;
    }, error => console.log(error));
  }
  update()
  {
    this.gift.updateGifts(this.id,this.gifts).subscribe( data =>{
      console.log(data);
      //this.gifts=data;
    });
    var msg=confirm("Updated Successfully")
    this.router.navigate(['addgifts']);
  }
  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
