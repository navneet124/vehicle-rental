import { Component, OnInit } from '@angular/core';
import { VendorDataService } from '../service/data/vendor-data.service';
import { Router } from '@angular/router';
import { Vehicle } from '../user/user.component';

@Component({
  selector: 'app-vendor1',
  templateUrl: './vendor1.component.html',
  styleUrls: ['./vendor1.component.css']
})
export class Vendor1Component implements OnInit {

message:string

vehicle: Vehicle[]

  constructor(
    private vendorservice: VendorDataService,
    private router: Router
  ) { }

  ngOnInit(){
    this.getAllVehicleDetails()
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
    this.router.navigate(['vehicle2', { vehicleId: vehicleId }])
  }

  addVehicle(){
    this.router.navigate(['vehicle1'])

  }

}
