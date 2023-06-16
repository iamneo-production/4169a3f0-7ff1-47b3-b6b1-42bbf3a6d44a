import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-delete',
  templateUrl: './add-delete.component.html',
  styleUrls: ['./add-delete.component.css']
})
export class AddDeleteComponent implements OnInit{
     userform: FormGroup;
     listdata:any;
     constructor(private fb:FormBuilder,private route:Router){
      this.listdata=[];
      this.userform=this.fb.group({
        name:['',Validators.required],
        price:['',Validators.required],
        description:['',Validators.required]
      })
     }
    add(){
      this.listdata.push(this.userform.value);
     }
     
deleteRow(item: any){
  var delBtn = confirm("Delete Theme ?");
  if ( delBtn == true ) {
    this.listdata.splice(item ,1);
    //this.arr.pop(item);
  }  

}
update(item: any){
  this.route.navigate(['edit',item]);
}
    
     ngOnInit(): void {
       
     }

}
