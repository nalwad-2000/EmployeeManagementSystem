import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HeaderService } from '../Services/header.service';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: any=[];

  constructor(private userService:UsersService, private headerService: HeaderService,private enrollmentService:EnrollmentService ) {
    this.headerService.setTitle("Jobs");
   }

  ngOnInit(): void {
    this.enrollmentService.explorejob()
    .subscribe(data => this.jobs = data);   
  }

}
