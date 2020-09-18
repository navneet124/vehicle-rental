import { Component, OnInit } from '@angular/core';
import { VendorDataService } from '../service/data/vendor-data.service';
import { Router } from '@angular/router';

export class BookingDetails{

  constructor(
    public bookingId: number,
    public vehicleId: number,
    public noOfDays: number,
    public totalAmount: number,
    public username: string
  ){ }
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingdetails: BookingDetails[]
  message: string

  constructor(
    private bookingservice: VendorDataService,
    private router: Router
  ) { }

  ngOnInit(){

    this.refreshBooking()
  }

  refreshBooking(){
    // console.log(this.username)
    //this.bookingDetail = new BookingDetail(0,0,0,0);
    this.bookingservice.getBookingDetails()
    .subscribe(
      response => {
        console.log(response);
        this.bookingdetails = response;
      }
    )
  }


}
