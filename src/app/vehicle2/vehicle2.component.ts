import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../user/user.component';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorDataService } from '../service/data/vendor-data.service';

@Component({
  selector: 'app-vehicle2',
  templateUrl: './vehicle2.component.html',
  styleUrls: ['./vehicle2.component.css']
})
export class Vehicle2Component implements OnInit {

  vehicleId: number
  vehicle: Vehicle

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleservice: VendorDataService
  ) { }

  ngOnInit(){

    this.vehicleId=this.route.snapshot.params['vehicleId'];
    this.vehicle =new Vehicle(this.vehicleId,'',0,false);
      console.log(this.vehicleId)
      this.vehicleservice.getVehicle(this.vehicleId)
      .subscribe(
        data => {
          console.log(data)
          //this.vehicle = data
          this.vehicle.vehicleName = data.vehicleName,
          this.vehicle.rentPerday = data.rentPerday,
          this.vehicle.isBooked = data.booked
        }
      )
    }

    updateVehicle(){

      this.vehicleservice.updateVehicle(this.vehicleId, this.vehicle)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['vendor1'])
        }
      )
    }
}
