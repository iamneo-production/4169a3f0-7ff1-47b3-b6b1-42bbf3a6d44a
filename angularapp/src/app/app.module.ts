import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { AddgiftsComponent } from './components/adminside/addgifts/addgifts.component';
import { AdminhomepageComponent } from './components/adminside/adminhomepage/adminhomepage.component';
import { OrderComponent } from './components/adminside/order/order.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { CustomersideComponent } from './components/customerside/customerside.component';

import { CustomerorderComponent } from './components/customerside/customerorder/customerorder.component';
import { UserhomepageComponent } from './components/customerside/userhomepage/userhomepage.component';
import { UserreviewComponent } from './components/customerside/userreview/userreview.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { UpdategiftComponent } from './components/adminside/updategift/updategift.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/adminside/edit/edit.component';
import { AddDeleteComponent } from './components/adminside/add-delete/add-delete.component';
import { StarRatingComponent } from './components/adminside/star-rating/star-rating.component';
import{ ProductsService} from './products.service';
import { ViewpageComponent } from './components/customerside/userhomepage/viewpage/viewpage.component';
import { GiftfinderComponent } from './components/customerside/userhomepage/giftfinder/giftfinder.component';
import { PaymentpageComponent } from './components/customerside/paymentpage/paymentpage.component';
import { CartComponent } from './components/customerside/cart/cart.component';
import { CustomFilterPipe } from './custom-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminsideComponent,
    AddgiftsComponent,
    AdminhomepageComponent,
    OrderComponent,
    AdminreviewComponent,
    CustomersideComponent,

    CustomerorderComponent,
    UserhomepageComponent,
    UserreviewComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    UpdategiftComponent,
    EditComponent,
    AddDeleteComponent,
    StarRatingComponent,
    ViewpageComponent,
    GiftfinderComponent,
    PaymentpageComponent,
    CartComponent,
    CustomFilterPipe
  ],
  imports: [
   BrowserModule,
   HttpClientModule,
   ReactiveFormsModule,
   FormsModule,
   
   
   AppRoutingModule

    //NgbModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
