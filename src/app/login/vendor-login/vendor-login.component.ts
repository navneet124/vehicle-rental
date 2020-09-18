import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { VendorDataService } from 'src/app/service/data/vendor-data.service';
import { VendorLogin } from 'src/app/vendor/vendor.component';


@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {

  vendorlogin: VendorLogin
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public vendorservice: VendorDataService
  ) { }

  ngOnInit(){
    this.vendorlogin = new VendorLogin('','');
  }

  handleLogin() {
    console.log(this.vendorlogin.username)
      this.vendorservice.loginVendor(this.vendorlogin)
      .subscribe(
        data => {
          console.log(data)
          sessionStorage.setItem('authenticatedVendor', this.vendorlogin.username);
          console.log('successful')
          this.router.navigate(['vendor'])
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      ) 

      
  }

}
