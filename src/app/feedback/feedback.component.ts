import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../service/data/user-data.service';
import { AdminDataService } from '../service/data/admin-data.service';

export class Feedback{
  constructor(
  public feedback: string
  ){}
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  message: string
  feedback: Feedback

  constructor(
    private router: Router,
    private userservice: UserDataService
  ) { }

  ngOnInit(){
    this.feedback = new Feedback('');
}

  giveFeedback(){
    this.userservice.feedback(this.feedback)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'Feedback Submitted';
        this.ngOnInit()
      }
    )
  }

}
