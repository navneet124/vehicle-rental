import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardService } from './service/route-guard.service';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { LogoutComponent } from './logout/logout.component';
import { VendorLoginComponent } from './login/vendor-login/vendor-login.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { UserComponent } from './user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { VendorComponent } from './vendor/vendor.component';
import { AdminComponent } from './admin/admin/admin.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BookingComponent } from './booking/booking.component';
import { Feedback1Component } from './feedback1/feedback1.component';
import { User1Component } from './user1/user1.component';
import { Vendor1Component } from './vendor1/vendor1.component';
import { Vehicle1Component } from './vehicle1/vehicle1.component';
import { Vehicle2Component } from './vehicle2/vehicle2.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import { VendorSaveComponent } from './vendor-save/vendor-save.component';


const routes: Routes = [
  { path:'', component: WelcomeComponent},
  {path:'welcome', component:WelcomeComponent},
  { path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'userLogin', component: UserLoginComponent},
  {path:'adminLogin', component: AdminLoginComponent},
  {path:'vendorLogin', component: VendorLoginComponent},
  {path:'user', component: UserComponent},
  {path:'user1', component: User1Component},
  {path:'feedback', component: FeedbackComponent},
  {path:'feedback1', component: Feedback1Component},
  {path:'vendor', component: VendorComponent},
  {path:'vendor1', component: Vendor1Component},
  {path:'vendordetail', component: VendorDetailComponent},
  {path:'vendorupdate', component: VendorUpdateComponent},
  {path:'vendorsave', component: VendorSaveComponent},
  {path:'admin', component: AdminComponent},
  {path:'vehicle', component: VehicleComponent},
  {path:'vehicle1', component: Vehicle1Component},
  {path:'vehicle2', component: Vehicle2Component},
  {path:'booking', component: BookingComponent},
  {path:'logout', component: LogoutComponent},
  

  { path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
