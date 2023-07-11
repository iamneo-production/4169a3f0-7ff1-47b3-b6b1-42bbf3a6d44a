import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService} from 'src/app/customer.service';

@Component({
  selector: 'app-adminreview',
  templateUrl: './adminreview.component.html',
  styleUrls: ['./adminreview.component.css']
})
export class AdminreviewComponent {

  title = 'Angular Search Using ng2-search-filter';
  listdata:Customer[];
  productId:any;
  customerName:any;
  productName:any;
  customerFeedBack:any;
  ratings:any;

  constructor(private CustomerService: CustomerService){}

  ngOnInit():void{
    this.getAllAdminreview();
  }
  private getAllAdminreview() {
    this.CustomerService.getCustomerList().subscribe(data=>{
      this.listdata=data;
    })
    console.log(this.listdata);
  }
starRating = 0;
}