import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user/user.component';
import { UserDataService } from '../service/data/user-data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  userId:number
  user: User

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public userService: UserDataService
    
  ) { }

  ngOnInit(){
    this.user = new User(-1,'','','','','','','');
  }

  addUser(){
    console.log(this.user.firstName)
      this.userService.createUser(this.user)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['userLogin'])
        }
      )

    }
  }


