import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { UserDataService } from '../service/data/user-data.service';

export class User{
  constructor(
    public id:number,
    public firstName: string,
    public lastName: string,
    public address: string,
    public gender: string,
    public phone: string,
    public username: string,
    public password: string
  ){}

}

export class UserLogin{
  constructor(
    public username: string,
    public password: string
  ){}
  }
  
export class Vehicle{

  constructor(
    public vehicleId: number,
    public vehicleName: string,
    public rentPerday: number,
    public isBooked: boolean
  ){ }
}

export class BookingDetail{

  constructor(
    public bookingId: number,
    public vehicleId: number,
    public noOfDays: number,
    public totalAmount: number
  ){ }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[]
  userlogin: UserLogin[]
  username: string

  bookingDetail: BookingDetail

  vehicles: Vehicle[]
  message: string

  // vehicles = [new Vehicle(0,'',0)];
  //   myvehicle = this.vehicles[0];
  

  constructor(
    private router: Router,
    private userservice: UserDataService,
  ) { }

  ngOnInit(){

    //this.vehicles = [new Vehicle(0,'',0)];
    // myvehicle = this.vehicles[0];
    this.bookingDetail = new BookingDetail(0,0,0,0);
    this.username = sessionStorage.getItem('authenticatedUser')
    this.refreshVehicles()
  }

  refreshVehicles(){
    // console.log(this.username)
    this.bookingDetail = new BookingDetail(0,0,0,0);
    this.userservice.getVehicles(this.username)
    .subscribe(
      response => {
        console.log(response);
        this.vehicles = response;
      }
    )
  }

  bookVehicle(){
    console.log(this.bookingDetail)
     this.userservice.bookVehicle(this.username,this.bookingDetail)
    .subscribe(
      response => {
        console.log(response);
        this.message = `Vehicle booked. Your Booking Id is ${response.bookingId} and total amount is ${response.totalAmount}`;
        this.refreshVehicles()
      }
    )
  }

  payRent(){
    console.log(this.bookingDetail.bookingId)
    console.log(this.bookingDetail.totalAmount)
    this.userservice.payRent(this.bookingDetail.bookingId,this.bookingDetail.totalAmount)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'payment successful';
        this.refreshVehicles()
      }
    )
  }

}
