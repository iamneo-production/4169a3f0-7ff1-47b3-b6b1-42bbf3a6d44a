import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  userform:FormGroup;

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
  edit(){
    this.listdata.push(this.userform.value);
    var delBtn = confirm("updated successfully");
  }

}
