import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor-detail/vendor-detail.component';
import { Router } from '@angular/router';
import { AdminDataService } from '../service/data/admin-data.service';

@Component({
  selector: 'app-vendor-save',
  templateUrl: './vendor-save.component.html',
  styleUrls: ['./vendor-save.component.css']
})
export class VendorSaveComponent implements OnInit {

  vendor: Vendor
  constructor(
    private router: Router,
    private adminservice:AdminDataService
  ) { }

  ngOnInit(){
    this.vendor = new Vendor(0,'','','','','');
  }

  addVendor(){
    this.adminservice.addVendor(this.vendor)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['vendordetail'])
      }
    )

  }

}
