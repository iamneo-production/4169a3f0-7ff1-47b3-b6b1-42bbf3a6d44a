import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddgiftsComponent } from './components/adminside/addgifts/addgifts.component';
import { AdminhomepageComponent } from './components/adminside/adminhomepage/adminhomepage.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { OrderComponent } from './components/adminside/order/order.component';
import { UpdategiftComponent } from './components/adminside/updategift/updategift.component';
import {AddDeleteComponent} from './components/adminside/add-delete/add-delete.component'
import {EditComponent} from './components/adminside/edit/edit.component';

import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';

import { UserhomepageComponent } from './components/customerside/userhomepage/userhomepage.component';
import { CartComponent } from './components/customerside/cart/cart.component';
import { CustomerorderComponent } from './components/customerside/customerorder/customerorder.component';
import { UserreviewComponent } from './components/customerside/userreview/userreview.component';
import { ViewpageComponent } from './components/customerside/userhomepage/viewpage/viewpage.component';
import { GiftfinderComponent } from './components/customerside/userhomepage/giftfinder/giftfinder.component';
import { PaymentpageComponent } from './components/customerside/paymentpage/paymentpage.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'admin',component:AdminhomepageComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  {path:'addgifts',component:AddgiftsComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  {path:'update/:id',component:UpdategiftComponent, canActivate: [AuthGuard], data: { role: 'admin' }  },
  {path:'theme',component:AddDeleteComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  {path:'edit',component:EditComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  {path:'order',component:OrderComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  {path:'admin-review',component:AdminreviewComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  {path:'login' , component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path:'userhomepage' , component:UserhomepageComponent, canActivate: [AuthGuard], data: { role: 'user' } },
  {path:'viewpage' , component:ViewpageComponent, canActivate: [AuthGuard], data: { role: 'user' } },
  {path:'giftfinder' , component:GiftfinderComponent, canActivate: [AuthGuard], data: { role: 'user' } },
  {path: 'cart' , component:CartComponent, canActivate: [AuthGuard], data: { role: 'user' } },
  {path: 'customerorder/:id' , component:CustomerorderComponent, canActivate: [AuthGuard], data: { role: 'user' } },
  {path: 'user-review' , component:UserreviewComponent, canActivate: [AuthGuard], data: { role: 'user' } },
  {path:'logout' , component:LoginComponent, canActivate: [AuthGuard], data: { role: 'user' } },
  {path:'paymentpage', component:PaymentpageComponent, canActivate: [AuthGuard], data: { role: 'user' } },
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}