import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddgiftsComponent } from './components/adminside/addgifts/addgifts.component';
import { AdminhomepageComponent } from './components/adminside/adminhomepage/adminhomepage.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { OrderComponent } from './components/adminside/order/order.component';
import { UpdategiftComponent } from './components/adminside/updategift/updategift.component';
import {AddDeleteComponent} from './components/adminside/add-delete/add-delete.component'
import {EditComponent} from './components/adminside/edit/edit.component'
import { LoginComponent } from './components/auth/login/login.component';
import { UserhomepageComponent } from './components/customerside/userhomepage/userhomepage.component';
import { CartComponent } from './components/customerside/cart/cart.component';
import { CustomerorderComponent } from './components/customerside/customerorder/customerorder.component';
import { UserreviewComponent } from './components/customerside/userreview/userreview.component';
import { SignupComponent } from './components/auth/signup/signup.component';


const routes: Routes = [
  {path:'' , component:LoginComponent},
  {path:'admin',component:AdminhomepageComponent},
  {path:'addgifts',component:AddgiftsComponent},
  {path:'update/:id',component:UpdategiftComponent },
  {path:'theme',component:AddDeleteComponent},
  {path:'edit',component:EditComponent},
  {path:'order',component:OrderComponent},
  {path:'admin-review',component:AdminreviewComponent},
  {path:'login' , component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path:'userhomepage' , component:UserhomepageComponent},
  {path: 'cart' , component:CartComponent},
  {path: 'customerorder' , component:CustomerorderComponent},
  {path: 'user-review' , component:UserreviewComponent},
  {path:'logout' , component:LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
