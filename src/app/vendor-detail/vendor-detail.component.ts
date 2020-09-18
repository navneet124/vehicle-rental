import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from '../service/data/admin-data.service';

export class Vendor{

  constructor(
    public vendorId: number,
    public vendorName: string,
    public address: string,
    public phone: string,
    public username: string,
    public password: string
  ){ }
}
@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendors: Vendor[]

  message: string

  constructor(
    private router: Router,
    private adminservice: AdminDataService
  ) { }

  ngOnInit(){
    this.refreshVendors()
  }

  refreshVendors(){
    this.adminservice.getVendors()
    .subscribe(
      response => {
        console.log(response);
        this.vendors = response;
      }
    )
  }

  deleteVendor(vendorId){
    console.log(`delete Vehicle ${vendorId}`)
    this.adminservice.deleteVendor(vendorId)
    .subscribe(
      response => {
        console.log(response);
        this.message = `Delete  of vendor ${vendorId} Successfull!`;
        this.refreshVendors()
      }
    )
  }

  updateVendor(vendorId){
    console.log(`update Vendor ${vendorId}`)
    this.router.navigate(['vendorupdate', { vendorId: vendorId }])
  }

  addVendor(){
    this.router.navigate(['vendorsave'])

  }

}
