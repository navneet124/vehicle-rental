import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../../user/user.component';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserDataService } from 'src/app/service/data/user-data.service';




@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userlogin: UserLogin
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService,
    public userService: UserDataService
  ) { }

  ngOnInit(){
    this.userlogin = new UserLogin('','');
  }

  handleLogin() {
    console.log(this.userlogin.username)
      this.userService.loginUser(this.userlogin)
      .subscribe(
        data => {
          console.log(data)
          sessionStorage.setItem('authenticatedUser', this.userlogin.username);
          console.log('successful')
          this.router.navigate(['user'])
        },
        error => {
          console.log(error)
          this.invalidLogin=true
        }
      ) 
  }

}
