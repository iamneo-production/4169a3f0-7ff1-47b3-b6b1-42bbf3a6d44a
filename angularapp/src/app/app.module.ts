import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { AddgiftsComponent } from './components/adminside/addgifts/addgifts.component';
import { AdminhomepageComponent } from './components/adminside/adminhomepage/adminhomepage.component';
import { OrderComponent } from './components/adminside/order/order.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { CustomersideComponent } from './components/customerside/customerside.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerorderComponent } from './components/customerside/customerorder/customerorder.component';
import { UserhomepageComponent } from './components/customerside/userhomepage/userhomepage.component';
import { UserreviewComponent } from './components/customerside/userreview/userreview.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminsideComponent,
    AddgiftsComponent,
    AdminhomepageComponent,
    OrderComponent,
    AdminreviewComponent,
    CustomersideComponent,
    CartComponent,
    CustomerorderComponent,
    UserhomepageComponent,
    UserreviewComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
