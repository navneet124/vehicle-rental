import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { VendorLoginComponent } from './login/vendor-login/vendor-login.component';
import { LogoutComponent } from './logout/logout.component';
import { VendorComponent } from './vendor/vendor.component';
import { AdminComponent } from './admin/admin/admin.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BookingComponent } from './booking/booking.component';
import { Feedback1Component } from './feedback1/feedback1.component';
import { User1Component } from './user1/user1.component';
import { Vendor1Component } from './vendor1/vendor1.component';
import { Vehicle1Component } from './vehicle1/vehicle1.component';
import { Vehicle2Component } from './vehicle2/vehicle2.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { VendorUpdateComponent } from './vendor-update/vendor-update.component';
import { VendorSaveComponent } from './vendor-save/vendor-save.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    UserLoginComponent,
    ErrorComponent,
    UserComponent,
    AdminLoginComponent,
    VendorLoginComponent,
    LogoutComponent,
    VendorComponent,
    AdminComponent,
    VehicleComponent,
    FeedbackComponent,
    BookingComponent,
    Feedback1Component,
    User1Component,
    Vendor1Component,
    Vehicle1Component,
    Vehicle2Component,
    VendorDetailComponent,
    VendorUpdateComponent,
    VendorSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
