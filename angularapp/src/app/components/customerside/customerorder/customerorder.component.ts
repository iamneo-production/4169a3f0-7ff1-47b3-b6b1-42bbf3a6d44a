import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { DatePipe } from '@angular/common';
import { OrderModel } from 'src/app/order-model';

@Component({
  selector: 'app-customerorder',
  templateUrl: './customerorder.component.html',
  styleUrls: ['./customerorder.component.css']
})
export class CustomerorderComponent implements OnInit {
  listdata:OrderModel[]
  orderForm!: FormGroup;
  selectedProduct: any;
  isDetailsVisible = false;
  productId: any;
  errorMessage: string ='';
  image: string ='';
  order:OrderModel=new OrderModel();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    //private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.activatedRoute.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.getProductById(Number(productId));
      } else {
        console.log('productId is null');
        // Handle the null case
        this.errorMessage = 'Invalid product ID. Please try again.';
      }
    });
  }

  getProductById(productId: number) {
    // Implement the logic to fetch the product details using HTTP GET request
    this.http.get<any>('https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/admin/getProductDetails/' + productId)
      .subscribe(
        (response: any) => {
          this.selectedProduct = response;
          // Set the form values with the received data
          this.orderForm.patchValue({
          orderPrice: response.price,
          orderDescription: "A Memorable gift you can give your loved ones!",
          selectGiftModel: response.name,
          });
        }, 
        (error: any) => {
          console.log('Error retrieving product:', error);
        }
      );
  }

  initializeForm() {
  this.orderForm = this.formBuilder.group({
    orderName: ['', Validators.required],
    orderDate: ['', Validators.required],
    orderAddress: ['', Validators.required],
    orderPhone: ['', Validators.required],
    orderEmail: ['', [Validators.required, Validators.email]],
    orderPrice: ['', Validators.required],
    selectGiftModel: ['', Validators.required],
    orderDescription: ['', Validators.required],
    selectThemeModel: ['', Validators.required],
  });
}

  

  placeOrder() {
    /*const formattedDate = this.datePipe.transform(this.orderForm.get('orderDate')?.value, 'yyyy-MM-dd');
    this.orderForm.patchValue({ orderDate: formattedDate });*/
    if (this.orderForm.valid) {
      // Submit the form data only if the form is valid
      this.http.post('https://8080-afebfaaebebecfdadebbecffccbcffabaefd.project.examly.io/user/order/AddOrder',this.orderForm.value)
        .subscribe(
          (response: any) => {
            console.log('Order placed successfully');
            // Handle the success case
            this.router.navigate(['/cart']);
          },
          (error: any) => {
            console.log('Error placing order:', error);
            // Handle the error case
            this.errorMessage = 'Error placing order. Please try again later.';
          }
        );
    } 
  }
  
  
  
  }
