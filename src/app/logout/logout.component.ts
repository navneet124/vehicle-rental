import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user = sessionStorage.getItem('authenticatedUser');
  admin = sessionStorage.getItem('authenticatedAdmin');
  vendor = sessionStorage.getItem('authenticatedVendor');
  constructor(
    private authenticationservice: AuthenticationService) { }

  ngOnInit(){
    if(!(this.user === null))
        this.userlogout()

    if(!(this.admin === null))
      this.adminlogout()

    if(!(this.vendor === null))
    this.vendorlogout()
    // this.authenticationservice.logout();
 
  }

  adminlogout(){
    sessionStorage.removeItem('authenticatedAdmin');
  }

  vendorlogout(){
    sessionStorage.removeItem('authenticatedVendor');
  }

  userlogout(){
    sessionStorage.removeItem('authenticatedUser');
  }

}
