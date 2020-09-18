import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../user/user.component';
import { Router } from '@angular/router';
import { AdminDataService } from '../service/data/admin-data.service';

@Component({
  selector: 'app-vehicle1',
  templateUrl: './vehicle1.component.html',
  styleUrls: ['./vehicle1.component.css']
})
export class Vehicle1Component implements OnInit {

  vehicle: Vehicle
  
  constructor(
    private router: Router,
    private adminservice:AdminDataService
  ) { }

  ngOnInit(){
    this.vehicle =new Vehicle(-1,'',0,false);
  }

  addVehicle(){
    console.log('inside addvehicle method')
    this.adminservice.addVehicle(this.vehicle)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['vendor1'])
      }
    )

  }
}
