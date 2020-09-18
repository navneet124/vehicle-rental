import { Component, OnInit } from '@angular/core';

export class AdminLogin{
  constructor(
    public adminid: string,
    public password: string
  ){}
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminlogin: AdminLogin[]

  constructor() { }

  ngOnInit(){
  }

}
