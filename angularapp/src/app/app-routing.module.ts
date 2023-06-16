import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddgiftsComponent } from './components/adminside/addgifts/addgifts.component';
import { AdminhomepageComponent } from './components/adminside/adminhomepage/adminhomepage.component';
import { AdminreviewComponent } from './components/adminside/adminreview/adminreview.component';
import { OrderComponent } from './components/adminside/order/order.component';
import { UpdategiftComponent } from './components/adminside/updategift/updategift.component';

const routes: Routes = [
  {path:'admin',component:AdminhomepageComponent},
  {path:'addgifts',component:AddgiftsComponent},
  {path:'update/:id',component:UpdategiftComponent },
  {path:'order',component:OrderComponent},
  {path:'admin-review',component:AdminreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
