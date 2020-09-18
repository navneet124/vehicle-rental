import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../user/user.component';
import { UserDataService } from './data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private userservice: UserDataService 
  ) { }

  //  authenticate(userlogin){
  //   return this.http.post('http://localhost:8081/users/login', userlogin);
    
  //    }
      
    

    isUserloggedIn(){
      let user = sessionStorage.getItem('authenticatedUser')
      return !(user === null)
    }

    isVendorloggedIn(){
      let user = sessionStorage.getItem('authenticatedVendor')
      return !(user === null)
    }

    isAdminloggedIn(){
      let user = sessionStorage.getItem('authenticatedAdmin')
      return !(user === null)
    }
  
    // logout(){
    //   sessionStorage.removeItem('authenticated');
    // }
  
  }
