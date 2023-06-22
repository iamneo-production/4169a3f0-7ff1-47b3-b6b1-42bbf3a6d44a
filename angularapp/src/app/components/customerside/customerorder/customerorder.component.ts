import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-customerorder',
  templateUrl: './customerorder.component.html',
  styleUrls: ['./customerorder.component.css']
})
export class CustomerorderComponent implements OnInit {
  orderForm!: FormGroup;
  selectedProduct: Product | undefined;
  isDetailsVisible = false;
  productId: any;
  errorMessage: string | undefined;
  image: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
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
    this.initializeForm();
  }

  getProductById(productId: number) {
    this.productService.getProductById(productId).subscribe(
      (product: Product | undefined) => {
        if (product) {
          this.selectedProduct = product;
        } else {
          console.log('Product not found');
        }
      },
      (error: any) => {
        console.log('Error retrieving product:', error);
      }
    );
  }

  initializeForm() {
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      enterDate: ['', Validators.required],
      enterAddress: ['', Validators.required],
      enterPhoneNo: ['', Validators.required],
      enterEmail: ['', [Validators.required, Validators.email]],
      orderPrice: ['', Validators.required],
      giftModel: ['', Validators.required],
      orderDescription: ['', Validators.required],
      selectThemeModel: ['', Validators.required],
    });
  }

  placeOrder() {
    if (this.orderForm.valid) {
      // You can perform the necessary actions to place the order here
      // For demonstration purposes, we will navigate to the payment page
      this.router.navigate(['/cart']);
    } else {
      // Mark all form fields as touched to display validation errors
      this.orderForm.markAllAsTouched();
    }
  }

  get nameControl() {
    return this.orderForm.get('name');
  }
}

