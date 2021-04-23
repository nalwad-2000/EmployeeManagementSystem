import { Component, OnInit,ViewChild } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { FileInput } from 'ngx-material-file-input';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { NullTemplateVisitor } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';  
import { DateAdapter } from '@angular/material/core';
import { DatePipe } from '@angular/common';

interface joiningbonus {
  value: string;
  viewjoiningbonus: string;
}

interface SkillExperience {
  value: string;
  viewSkillExperience: string;
}

interface expertise {
  value: string;
  viewexpertise: string;
}

interface skill {
  value: string;
  viewskill: string;
}


interface Experience {
  value: string;
  viewexp: string;
}

interface jaf {
  value: string;
  viewjaf: string;
}

interface sc {
  value: string;
  viewsc: string;
}

interface src {
  value: string;
  viewsrc: string;
}

interface cs {
  value: string;
  viewcs: string;
}

interface si {
  value: string;
  viewsi: string;
}

@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})


export class AddcandidateComponent implements OnInit {
  router: any;
  variable = "Last Increment Date";
  employeereferrallabel:any;
  talentnetworklabel: any;
  datestring: string = 'Last Increment Date';

  onSelectionChanged({ value }) {
    console.log(value);
    if (value === 'Yes') {
      this.employeeForm.get('bonusamount').enable();
    } else {
      this.employeeForm.get('bonusamount').disable();
    }
  }

  onSelectionChangedsource({value}){
    console.log(value);
    if (value === 'Employee Referral') {
    this.employeereferrallabel = "Employee Name";
    } else {
      this.employeereferrallabel = "Talent Network";
    }
  }

  image;
  resume;
  employeeForm : FormGroup;

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void{
    var file: File = inputValue.files[0];
      //var Resumefile: File = inputValue.files[0]; 
    var myReader: FileReader = new FileReader();
      //var myReader1: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
        //this.resume = myReader1.result;
      console.log(myReader.result);
        //console.log(myReader1.result);
    }
    myReader.readAsDataURL(file);
      //myReader.readAsDataURL(Resumefile);
  }
  
  selectedskill: string;
  selectedexp: string;
  selectedjaf: string;
  selectedsc: string;
  selectedsrc: string;
  selectedcs: string;
  selectedsi: string;
  selectedexpertise: string;
  selectedSkillExperience: string;
  selectedjoiningbonus: string;

  joiningbonuses: joiningbonus[] = [
    {value: 'Yes',viewjoiningbonus:'Yes'},
    {value: 'No', viewjoiningbonus:'No'}
  ]

  SkillExperiences: SkillExperience[] = [
    {value: '1 Year',viewSkillExperience:'1 Year'},
    {value: '3 Years',viewSkillExperience:'3 Years'},
    {value: 'Above 3 Years',viewSkillExperience:'Above 3 Years'}
  ]

  Expertises: expertise[] = [
    {value: 'Beginner', viewexpertise:'Beginner'},
    {value: 'Moderate', viewexpertise:'Moderate'},
    {value: 'Expert', viewexpertise:'Expert'}
  ]

  skills: skill[] = [
    {value: 'Python', viewskill: 'Python'},
    {value: 'Java', viewskill: 'Java'},
    {value: 'Angular', viewskill: 'Angular'},
    {value: 'React', viewskill: 'React'}
  ];

  Experiences: Experience[] = [
    {value: '1 Year', viewexp: '1 Year'},
    {value: '3 Years', viewexp: '3 Years'},
    {value: 'Above 3 Years', viewexp: 'Above 3 Years'}
  ];


  css: cs[] = [
    {value:'Apptitude Round',viewcs:"Apptitude Round"},
    {value:'Technical Round',viewcs:"Technical Round"},
    {value:'H R Round',viewcs:"H R Round"}
  ];

  sis: si[] = [
    {value:'Apptitude Round',viewsi:"Apptitude Round"},
    {value:'Technical Round',viewsi:"Technical Round"},
    {value:'H R Round',viewsi:"H R Round"},
  ];

  jafs: jaf[] = [
    {value:'Manager',viewjaf:"Manager"},
    {value:'Developer',viewjaf:"Developer"},
    {value:'Tester',viewjaf:"Tester"}
  ];

  scs: sc[] = [
    {value:'Employee Referral', viewsc:"Employee Referral"},
    {value:'Talent Network', viewsc:"Talent Network"}
  ];

  srcs: src[] = [
    {value:'Employee Referral', viewsrc:"Employee Referral"},
    {value:'Talent Network', viewsrc:"Talent Network"}
  ]


  constructor(private datePipe: DatePipe,private http: HttpClient ,private formbuilder: FormBuilder, private headerService: HeaderService, private snackBar: MatSnackBar, private _enrollmentService: EnrollmentService, private fb: FormBuilder) {
    this.headerService.setTitle("Add Candidate");
   }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.employeeForm = this.formbuilder.group({
      name: [''],
      email: [''],
      location: [''],
      phone: [''],
      skype: [''],
    skills: this.formbuilder.array([
      this.addSkillFormGroup()
    ]),
      industryexperience: [''],
      expectedctc: [''],
      currentctc: [''],
      basepay:[''],
      variablepay:[''],
      noticeperiod:[''],
      uploadresume:[''],
      candidateimage:[''],
      jobappliedfor:[''],
      sourcecategory:[''],
      source:[''],
      workedat:[''],
      lastincrementdate:[''],
      perincrement:[''],
      joiningbonus:[''],
      bonusamount:[''],
      canpostingdate: this.datePipe.transform(Date.now(),'yyyy-MM-dd'),
    /*status:this.formbuilder.array([
    ]),*/
    currentstatus:this.formbuilder.array([
      ]),
    scheduleinterview: this.formbuilder.array([
      ]),
    interviewername: this.formbuilder.array([
    ]),
    interviewdate:this.formbuilder.array([
      ]),
    interviewtime:this.formbuilder.array([
      ]),
    notes: this.formbuilder.array([
      ]),
    emailfornotes: this.formbuilder.array([
      ]),
    });
  }

  addnotesFormGroup(): FormGroup {
    return this.formbuilder.group({
    })
  }

  addSkillButtonClick() : void{
    (<FormArray>this.employeeForm.get('skills')).push(this.addSkillFormGroup());
  }

  addSkillFormGroup(): FormGroup {
    return this.formbuilder.group({
      skillName: [''],
      experienceInYears: [''],
      proficiency: ['']
    })
  }

  onsubmit = async (value:any) => {
    console.log('json before change',value);

    const file: File = value.candidateimage.files[0];
    console.log(file,'candidate image');
    console.log(value,'json value');
    console.log(this.employeeForm.value,'employeeform');
    value.candidateimage = await this.getBaseEncodedStringForImage(file);

    console.log(value,'json value');
    console.log(this.employeeForm.value,'employeeform');
    const Resumefile: File = value.uploadresume.files[0];
    console.log(Resumefile, 'resume');
    value.uploadresume = await this.getBaseEncodedStringForImage(Resumefile);

    console.log('json after change',value);
    this._enrollmentService.enroll(value)
    .subscribe(
      data => console.log('Success!', data),
      error => console.error('Error!', error)
    );
    console.log(value);
  }

  getBaseEncodedStringForImage = async (fileObject: File) => {
    const promiseObject = new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onloadend = (e) => {
        //jsonObject.candidateimage = fileReader.result;
        resolve(fileReader.result);
      };
      fileReader.readAsDataURL(fileObject);
    });
    return promiseObject;
  }

  /*getBaseEncodedStringForResume = async (fileObject: File,jsonObject: any) => {
    const promiseObject = new Promise((resolve,reject) => {
      const fileReader1 = new FileReader();
      
      fileReader1.onloadend = (e) => {
        jsonObject.uploadresume = fileReader1.result;
        resolve();
      };
      fileReader1.readAsDataURL(fileObject);
    });
    return promiseObject;
  }*/
}