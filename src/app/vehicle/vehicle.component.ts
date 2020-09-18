import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/data/user-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from '../user/user.component';
import { VendorDataService } from '../service/data/vendor-data.service';



@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

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
          this.router.navigate(['vendor'])
        }
      )
    }
    
}
