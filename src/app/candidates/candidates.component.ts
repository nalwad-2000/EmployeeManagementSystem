import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HeaderService } from 'src/app/Services/header.service';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  users: any=[];
   
  constructor(private userService:UsersService,private enrollmentService:EnrollmentService ,private headerService: HeaderService){
    this.headerService.setTitle("Candidates");
  }

  ngOnInit(){
     this.enrollmentService.explore()
      .subscribe(data => this.users = data);
  }
  }

