import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { HeaderService } from 'src/app/Services/header.service';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { CommentService } from 'src/app/Services/comment.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  user:any=[];
  resume : any;
  encodedstring: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private _http:HttpClient, private commentService: CommentService, private route:ActivatedRoute,private enrollmentService:EnrollmentService, private userService:UsersService, private headerService: HeaderService) { }

  ngOnInit() {
      this.resume = this.enrollmentService.candidateDetails;
      console.log(this.resume.uploadresume,'this is resume');

      /*this.encodedstring = this.resume.uplaodresume;
      console.log(this.encodedstring,'encoded string');*/

      //console.log(atob(this.resume.uploadresume),'decoded');
  }

}
