import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from "@angular/router";
import { HeaderService } from 'src/app/Services/header.service';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  job:any=[];

  constructor(private route:ActivatedRoute, private enrollmentService:EnrollmentService, private userService:UsersService, private headerService: HeaderService) {
    this.headerService.setTitle("Job");
   }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    this.job = this.enrollmentService.explorejobdetail(id).subscribe(data => this.job = data);

    this.enrollmentService.explorejobdetail(id)
      .subscribe(data => this.job = data);
  }

}
