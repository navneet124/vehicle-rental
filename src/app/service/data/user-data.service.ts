import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'src/app/user/user.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private http: HttpClient
  ) { }

  createUser(user){
    return this.http.post('http://localhost:8081/users/register',user);
  }

  loginUser(userlogin){
    return this.http.post('http://localhost:8081/users/login', userlogin);
  }

  getVehicles(username): Observable<any>{
    // console.log('test call');
    return this.http.get(`http://localhost:8081/users/${username}/vehicles`, username);
  }

  bookVehicle(username, bookingDetail): Observable<any>{
    return this.http.patch(`http://localhost:8081/users/${username}/vehicles/book`,bookingDetail)
  }

  payRent(bookingId, totalAmount){
    return this.http.get(`http://localhost:8081/users/${bookingId}/${totalAmount}`)
  }

  feedback(feedback){
    return this.http.post(`http://localhost:8081/users/feedback`,feedback)
  }

}
