import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../service/data/admin-data.service';
import { Feedback } from '../feedback/feedback.component';

@Component({
  selector: 'app-feedback1',
  templateUrl: './feedback1.component.html',
  styleUrls: ['./feedback1.component.css']
})
export class Feedback1Component implements OnInit {

  feedbacks: Feedback[]
  constructor(
    private adminservice: AdminDataService
  ) { }

  ngOnInit(){
    this.getFeedback()
  }

  getFeedback(){
    this.adminservice.getFeedback()
    .subscribe(
      response => {
        console.log(response);
        this.feedbacks = response;
      }
    )
  }

}
