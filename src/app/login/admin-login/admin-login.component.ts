import { Component, OnInit } from '@angular/core';
import { AdminLogin } from 'src/app/admin/admin/admin.component';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AdminDataService } from 'src/app/service/data/admin-data.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminlogin: AdminLogin
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public adminservice: AdminDataService
  ) { }

  ngOnInit(){
    this.adminlogin = new AdminLogin('','');
  }

  handleLogin() {
    console.log(this.adminlogin.adminid)
      this.adminservice.loginAdmin(this.adminlogin)
      .subscribe(
        data => {
          console.log(data)
          sessionStorage.setItem('authenticatedAdmin', this.adminlogin.adminid);
          console.log('successful')
          this.router.navigate(['vendordetail'])
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        }
      ) 
  }

}
