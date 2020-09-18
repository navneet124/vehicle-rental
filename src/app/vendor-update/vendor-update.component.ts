import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor-detail/vendor-detail.component';
import { AdminDataService } from '../service/data/admin-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-update',
  templateUrl: './vendor-update.component.html',
  styleUrls: ['./vendor-update.component.css']
})
export class VendorUpdateComponent implements OnInit {

  vendorId: number
  vendor: Vendor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminservice: AdminDataService
  ) { }

  ngOnInit(){
    this.vendorId=this.route.snapshot.params['vendorId'];
    this.vendor = new Vendor(0,'','','','','');

    console.log(this.vendorId)
      this.adminservice.getVendor(this.vendorId)
      .subscribe(
        data => {
          console.log(data)
          this.vendor = data
          // this.vendor.vendorName = data.vendorName,
          // this.vendor.rentPerday = data.rentPerday,
          // this.vehicle.isBooked = data.booked
        }
      )

  }

  updateVendor(){
    this.adminservice.updateVendor(this.vendorId, this.vendor)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['vendordetail'])
        }
      )
  }

}
