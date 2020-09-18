import { Component, OnInit } from '@angular/core';
import { VendorDataService } from '../service/data/vendor-data.service';
import { Router } from '@angular/router';
import { Vehicle } from '../user/user.component';

export class VendorLogin{
  constructor(
    public username: string,
    public password: string
  ){}
}

export class BookingDetail{

  constructor(
    public bookingId: number,
    public vehicleId: number,
    public noOfDays: number,
    public totalAmount: number,
    public username: string
  ){ }
}

// export class VehicleDetail{

//   constructor(
//     vehicleId: number,
//     isBooked: boolean,
//     vehicleName: string,
//     rentPerday: number
//   ){}
// }

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendorlogin: VendorLogin[]

  bookingDetails: BookingDetail[]

  // vehicleDetails: VehicleDetail[]

  vehicle: Vehicle[]

  message: string

  constructor(
    private vendorservice: VendorDataService,
    private router: Router
  ) { }

  ngOnInit(){
    //this.bookingDetails = new BookingDetail(0,0,0,0,'');

    //this.admin = sessionStorage.getItem('AuthenticatedAdmin')
    this.getAllVehicleDetails()
  }

  getBookingDetails(){
    // console.log(this.username)
    //this.bookingDetails = new BookingDetail(0,0,0,0,'');
    this.vendorservice.getBookingDetails()
    .subscribe(
      response => {
        console.log(response);
        this.bookingDetails = response;
      }
    )
  }

  getAllVehicleDetails(){
    this.vendorservice.getAllVehicleDetails()
    .subscribe(
      response => {
        console.log(response);
        this.vehicle = response;
      }
    )
  }

  deleteVehicle(vehicleId){
    console.log(`delete Vehicle ${vehicleId}`)
    this.vendorservice.deleteVehicle(vehicleId)
    .subscribe(
      response => {
        console.log(response);
        this.message = `Delete  of Vehicle ${vehicleId} Successfull!`;
        this.getAllVehicleDetails()
      }
    )
  }

  updateVehicle(vehicleId){
    console.log(`update Vehicle ${vehicleId}`)
    this.router.navigate(['vehicle', { vehicleId: vehicleId }])
  }

}
