import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService,private formbuilder: FormBuilder,private router: Router,private route:ActivatedRoute,private enrollmentService:EnrollmentService) {}

  username: string;
  password: string;
  hai: string;
  emailfornotesForm: FormGroup; 
  user:any=[];
  emailfornotesArray:any[]=[];
  latestemailfornotes: string;

  onoptionchangeemail(value: any){

    this.storage.set("key",value);
    /*let a = this.storage.get("key");
    console.log("You r getting this data from the localstorage"+a);*/

    /*console.log(value);
    this.emailfornotesArray.push({email:value});
    console.log(this.emailfornotesArray);
    let id = this.route.snapshot.params['id'];

    this.enrollmentService.updateemail(id,{email:this.emailfornotesArray})
      .subscribe(res=> console.log(res));*/
  }

  ngOnInit(){
    
    this.emailfornotesForm = this.formbuilder.group({
      emailfornotes: [''],

    })

   
    /*let id = this.route.snapshot.params['id'];    
    this.enrollmentService.exploredetail(id)
    .subscribe(data =>{this.emailfornotesArray = data["email"]; this.user = data; 
  } );*/

  }

  login(): void {
    if (this.password === 'admin') {
      this.router.navigate(['/home']);
    } else {
      console.log('please give the right credentials');
      alert("Invalid credentials")
    }
  }
}
