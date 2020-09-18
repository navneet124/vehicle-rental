import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.component';
import { AdminDataService } from '../service/data/admin-data.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  users: User[]

  message: string
  constructor(
    private adminservice: AdminDataService
  ) { }

  ngOnInit(){
    this.refreshUsers()
  }

  refreshUsers(){
    // console.log(this.username)
    //this.bookingDetail = new BookingDetail(0,0,0,0);
    this.adminservice.getUser()
    .subscribe(
      response => {
        console.log(response);
        this.users = response;
      }
    )
  }

}
