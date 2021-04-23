import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersService } from 'src/app/services/users.service';
import { HeaderService } from 'src/app/Services/header.service';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { CommentService } from 'src/app/Services/comment.service';
import { FormBuilder, FormGroup, FormArray, FormControl, EmailValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import {MatDialog} from '@angular/material/dialog';
import { CandidatesComponent } from '../candidates.component';
import { ResumeComponent } from './resume/resume.component';
import { DomSanitizer } from '@angular/platform-browser';

interface status {
  value: string;
  viewvalue: string;
}

interface currentstatus {
  value: string;
  viewValue: string;
}

interface scheduledinterview {
  value: string;
  viewvalue: string;
}

interface interviewername {
  value: string;
  viewvalue: string;
}

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})

export class CandidateComponent implements OnInit {

 resume : any;
 //employeeForm : FormGroup;
 currentstatusForm : FormGroup;
 scheduleinterviewForm : FormGroup;
 interviewernameForm : FormGroup;
 interviewdateForm : FormGroup;
 interviewtimeForm : FormGroup;
 notesForm: FormGroup;

tempArray :any[]= [];
//statusArray:any[]=[];
currentstatusArray:any[]=[];
scheduleinterviewArray:any[]=[];
interviewerArray:any[]=[];
interviewdateArray:any[]=[];
interviewtimeArray:any[]=[];
emailfornotesArray:any[]=[];
result = [];
mainresult = {};

//latestStatus:string;
latestCurrentStatus: string;
latestScheduleinterview: string;
latestInterviewer: string;
latestInterviewdate: string;
latestInterviewtime: string;

  statuss: status[] = [
    {value: 'None',viewvalue:'None'},
    {value: 'Aptitude Round',viewvalue:'Aptitude Round'},
    {value: 'Technical Round',viewvalue: 'Technical Round'},
    {value: 'H R Round',viewvalue: 'H R Round'},
    {value: 'Rejected',viewvalue: 'Rejected'}
  ]

  currentstatuss: currentstatus[] = [
    {value: 'None',viewValue: 'None'},
    {value: 'Aptitude Round', viewValue: 'Aptitude Round'},
    {value: 'Technical Round', viewValue: 'Technical Round'},
    {value: 'H R Round', viewValue: 'H R Round'},
    {value: 'Selected', viewValue: 'Selected'},
    {value: 'Rejected',viewValue: 'Rejected'}
  ];

  scheduledinterviews: scheduledinterview[] = [
    {value: 'None',viewvalue:'None'},
    {value:'Aptitude Round',viewvalue:'Aptitude Round'},
    {value: 'Technical Round', viewvalue: 'Technical Round'},
    {value: 'H R Round', viewvalue: 'H R Round'}
  ];

  interviewernames: interviewername[] = [
    {value: 'Naveen',viewvalue:'Naveen'},
    {value: 'Varun',viewvalue:'Varun'}
  ]

   user:any=[];
  checked:any;
  public obj: any;
  Email: any;
  progressvalue = "None";
  formdata: any;
  url;

  
  constructor(private sanitizer: DomSanitizer,public dialog: MatDialog,@Inject(LOCAL_STORAGE) private storage: StorageService,private formbuilder: FormBuilder,private _http:HttpClient, private commentService: CommentService, private route:ActivatedRoute,private enrollmentService:EnrollmentService, private userService:UsersService,private snackBar: MatSnackBar, private headerService: HeaderService){
    this.headerService.setTitle("Candidate");
  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialog() {
    let id = this.route.snapshot.params['id'];
    this.enrollmentService.exploredetail(id)
    .subscribe(data => {
      this.user = data;
      this.enrollmentService.candidateDetails = data;
      this.dialog.open(ResumeComponent);
      });
    //console.log(this.user);

    /*this.resume = this.user.uploadresume;
        console.log(this.resume,'resume url');
        var pdfdata = btoa(this.resume);
        console.log(pdfdata,'encoded url');
        this.url = this.sanitizer.bypassSecurityTrustUrl("data:application/pdf;base64,"+pdfdata);*/

    /*const dialogRef = this.dialog.open(ResumeComponent,{
      data: {name: this.user.uploadresume}});*/

    /*dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });*/
  }


 /* updatecolor(status){
    if(status == "None"){
      return 'primary';
    }else if(status == "Aptitude Round"){
      return 'black';
    }else if(status == "Technical Round"){
      return 'green';
    }else if(status == 'H R Round'){
      return 'accent';
    }else {
      return 'red';
    }
  }*/

  /*onoptionchangestatus(value: any){

      console.log(value);
    this.statusArray.push({status:value});
    console.log(this.statusArray);
    let id = this.route.snapshot.params['id'];

    this.enrollmentService.updatestatus(id,{status : this.statusArray})
      .subscribe(res=>console.log(res));
      
  }*/

  onoptionchangecurrentstatus(value : any) {
    console.log(value);
    this.currentstatusArray.push({currentstatus:value});
    console.log(this.currentstatusArray);
    let id = this.route.snapshot.params['id'];

    this.enrollmentService.updatestatus(id,{currentstatus : this.currentstatusArray})
      .subscribe(res=>console.log(res));
  }

  onoptionchangescheduleinterview(value : any) {
    console.log(value);
    this.scheduleinterviewArray.push({scheduleinterview:value});
    console.log(this.scheduleinterviewArray);
    let id1 = this.route.snapshot.params['id'];

    this.enrollmentService.updatescheduleinterview(id1,{scheduleinterview : this.scheduleinterviewArray})
      .subscribe(res=>console.log(res));
  }

  opoptionchangeinterviewername(value: any) {
    console.log(value);
    this.interviewerArray.push({interviewername:value});
    console.log(this.interviewerArray);
    let id = this.route.snapshot.params['id'];

    this.enrollmentService.updateinterviewername(id,{interviewername : this.interviewerArray})
      .subscribe(res=>console.log(res));
  }

  onoptionchangeinterviewdate(value: any) {
    console.log(value);
    this.interviewdateArray.push({interviewdate:value});
    console.log(this.interviewdateArray);
    let id1 = this.route.snapshot.params['id'];

    this.enrollmentService.updateinterviewdate(id1,{interviewdate : this.interviewdateArray})
      .subscribe(res=>console.log(res));

      this.updatehistory();
  }

  updatehistory(){

    let id = this.route.snapshot.params['id'];    
      this.enrollmentService.exploredetail(id)
      .subscribe(data =>{this.scheduleinterviewArray = data["scheduleinterview"];  
  
        this.interviewdateArray = data["interviewdate"]; 
       
      var finalArray = this.scheduleinterviewArray.map((obj) => {
        return obj.scheduleinterview;
      });
      var finalArray2 = this.interviewdateArray.map((obj) => {
        return obj.interviewdate;
      });
      finalArray.forEach((s, i) => {
        this.mainresult[s] = finalArray2[i];
      });
      this.result = Object.entries(this.mainresult);
      console.log(this.result);
    });
  }

  onoptionchangeinterviewtime(value: any) {
    console.log(value);
    this.interviewtimeArray.push({interviewtime:value});
    console.log(this.interviewtimeArray);
    let id = this.route.snapshot.params['id'];

    this.enrollmentService.updateinterviewtime(id,{interviewtime : this.interviewtimeArray})
      .subscribe(res=>console.log(res));
  }

  

  sendemail() {
    /*let id = this.route.snapshot.params['id'];

    this.enrollmentService.exploredetail(id)
      .subscribe(data => this.user = data); */
      let A = this.scheduleinterviewArray.length-1;
      this.latestScheduleinterview = this.scheduleinterviewArray[A]['scheduleinterview'];

      let B = this.interviewdateArray.length-1;
      this.latestInterviewdate = this.interviewdateArray[B]['interviewdate'];

      let C = this.interviewtimeArray.length-1;
      this.latestInterviewtime = this.interviewtimeArray[C]['interviewtime'];

      let D = this.interviewerArray.length-1;
      this.latestInterviewer = this.interviewerArray[D]['interviewername'];

    window.location.href = "mailto:"+this.user.email+"?subject=Your Interview Scheduled For " +this.latestScheduleinterview+ "&body=Interviewer Name : " +this.latestInterviewer+ "           Interview Date : " +this.latestInterviewdate+ "           Interview Time : " +this.latestInterviewtime;
  }


  /*getprogressvalue(status){
    let id = this.route.snapshot.params['id'];
    this.enrollmentService.exploredetail(id)
    .subscribe(data => this.user = data);

    if(this.user.status == "None"){
      return 25;
    }else if(this.user.status == "Aptitude Round"){
      return 50;
    }else if(this.user.status == "Technical Round"){
      return 75;
    }else if(this.user.status == "H R Round"){
      return 90;
    }else {
      return 0;
    }
  }*/

  

  OpenSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }


  ngOnInit(){

    /*this.employeeForm = this.formbuilder.group({
      status: [''],
    })*/

    this.currentstatusForm = this.formbuilder.group({
      currentstatus:[''],
    })

    this.scheduleinterviewForm = this.formbuilder.group({
      scheduleinterview:[''],
    })

    this.interviewernameForm = this.formbuilder.group({
      interviewername:[''],
    })

    this.interviewdateForm = this.formbuilder.group({
      interviewdate:[''],
    })

    this.interviewtimeForm = this.formbuilder.group({
      interviewtime: [''],
    })

    this.notesForm = this.formbuilder.group({
      note: ['']
    })

    let id = this.route.snapshot.params['id'];    
    this.enrollmentService.exploredetail(id)
    .subscribe(data =>{this.tempArray = data["notes"]; this.user = data; 

      this.emailfornotesArray = data["emailfornotes"];

      /*this.statusArray = data["status"]; 
      let a = this.statusArray.length-1;
      this.latestStatus = this.statusArray[a]['status'];*/
    
      this.currentstatusArray = data["currentstatus"];
      let b = this.currentstatusArray.length-1;
      this.latestCurrentStatus = this.currentstatusArray[b]['currentstatus'];
      //this.currentstatusForm.get('currentstatus').setValue(this.latestCurrentStatus);
      if(this.latestCurrentStatus === 'Selected' || this.latestCurrentStatus === 'Rejected'){
        this.currentstatusForm.get('currentstatus').disable();
        this.scheduleinterviewForm.get('scheduleinterview').disable();
        this.interviewernameForm.get('interviewername').disable();
        this.interviewdateForm.get('interviewdate').disable();
        this.interviewtimeForm.get('interviewtime').disable();
      }


      this.scheduleinterviewArray = data["scheduleinterview"];
      let c = this.scheduleinterviewArray.length-1;
      this.latestScheduleinterview = this.scheduleinterviewArray[c]['scheduleinterview'];

      this.interviewerArray = data["interviewername"];
      let d = this.interviewerArray.length-1;
      this.latestInterviewer = this.interviewerArray[d]['interviewername'];

      this.interviewdateArray = data["interviewdate"];
      let e = this.interviewdateArray.length-1;
      this.latestInterviewdate = this.interviewdateArray[e]['interviewdate'];

      this.interviewtimeArray = data["interviewtime"];
      let f = this.interviewtimeArray.length-1;
      this.latestInterviewtime = this.interviewtimeArray[f]['interviewtime'];

      this.scheduleinterviewArray = data["scheduleinterview"]; 
  
      this.interviewdateArray = data["interviewdate"]; 
       
      var finalArray = this.scheduleinterviewArray.map((obj) => {
        return obj.scheduleinterview;
      });
      var finalArray2 = this.interviewdateArray.map((obj) => {
        return obj.interviewdate;
      });
      finalArray.forEach((s, i) => {
        this.mainresult[s] = finalArray2[i];
      });
      this.result = Object.entries(this.mainresult);
      console.log(this.result);
    } );


    //this.latestNotes = this.tempArray[this.tempArray.length-1];

  }

  /*addnotesFormGroup(): FormGroup{
    return this.formbuilder.group({
      notes:[''],
    })
  }*/

  notessubmit(value:any) {
    //console.log(this.latestNotes);
    console.log(value);

    let id = this.route.snapshot.params['id'];

    let a = this.storage.get("key");
    this.emailfornotesArray.push({emailfornotes:a});
    console.log(this.emailfornotesArray);

    this.tempArray.push({notes:value});
    console.log(this.tempArray);

    this.enrollmentService.updatenotes(id,{notes : this.tempArray})
      .subscribe(res=>console.log(res));

    this.enrollmentService.updateemailfornotes(id,{emailfornotes : this.emailfornotesArray})
      .subscribe(res=>console.log(res));
     
     //this.latestNotes.push(this.tempArray[this.tempArray.length-1]);
     //console.log(this.latestNotes);
     //put this in html {{latestNotes[latestNotes.length-1]?.notes}}
  }


   myFunction() {
  const checkBox = document.getElementById("myCheck") as HTMLInputElement;
  const text = document.getElementById("text");
    if (checkBox.checked == true){
    text.style.display = "block";
   } else {
     text.style.display = "none";
  }
   }

  }

 
 