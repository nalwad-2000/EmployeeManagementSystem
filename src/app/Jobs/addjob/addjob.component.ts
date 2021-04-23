import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/Services/header.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

interface urgency {
  value: string;
  viewurgency: string;
}

interface department {
  value: string;
  viewdept: string;
}

interface hiringmanager {
  value: string;
  viewhm: string;
}

interface skill {
  value: string;
  viewskill: string;
}

interface experiencelevel {
  value: string;
  viewel: string;
}

interface preferedlocation {
  value: string;
  viewpl: string;
}


@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {

  logo;
  jobsForm : FormGroup;

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void{
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.logo = myReader.result;
      console.log(myReader.result);
    }
    myReader.readAsDataURL(file);
  }
  

selecteddept: string;
selectedhm: string;
selectedskill: string;
selectedel: string;
selectedpl: string;

urgencies: urgency[] = [
  {value: 'Yes',viewurgency: "Yes"},
  {value: 'No',viewurgency: 'No'}
]

departments: department[] = [
  {value: 'Python Developer', viewdept: 'Python Developer'},
  {value: 'Java Developer', viewdept: 'Java Developer'},
  {value: 'System Manager', viewdept: 'System Manager'},
  {value: 'Database Manager', viewdept: 'Database Manager'},
  {value: '.Net Developer', viewdept: '.Net Developer'},
  {value: 'React Developer', viewdept: 'React Developer'},
  {value: 'Angular Developer', viewdept: 'Angular Developer'},
  {value: 'Ionic Developer', viewdept: 'Ionic Developer'},
  {value: 'Tester', viewdept: 'Tester'}
];

hiringmanagers: hiringmanager[] = [
  {value: 'Naveen',viewhm:'Naveen'},
  {value: 'Subash',viewhm:'Subash'},
  {value: 'Ratan',viewhm:'Ratan'}
];

skills: skill[] = [
  {value: 'Python', viewskill: 'Python'},
  {value: 'Java', viewskill: 'Java'},
  {value: 'Angular', viewskill: 'Angular'},
  {value: 'React', viewskill: 'React'},
  {value: '.Net', viewskill:'.Net'},
  {value: 'React',viewskill:'React'},
  {value: 'Ionic', viewskill:'Ionic'},
  {value: "Database Management",viewskill: "Database Management"},
  {value: "Testing", viewskill: 'Testing'},
  {value:"System Management",viewskill:'System Management'}
];

experiencelevels: experiencelevel[] = [
  {value: '1 Year', viewel:'1 Year'},
  {value: '2 Years', viewel:'2 Years'},
  {value: '3 Years',viewel:'3 Years'}
];

preferedlocations: preferedlocation[] = [
  {value: 'Bangalore',viewpl:'Bangalore'},
  {value: 'Baroda', viewpl:'Baroda'},
  {value: 'Mumbai', viewpl:'Mumbai'}
];

  constructor(private formbuilder: FormBuilder,private headerService: HeaderService, private snackBar: MatSnackBar, private _enrollmentService: EnrollmentService) {
    this.headerService.setTitle("Add Job");
   }

   openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.jobsForm = this.formbuilder.group({
      jobname: [''],
      jobdescription: [''],
      department: [''],
      hiringmanager: [''],
      requiredskills: [''],
      experiencelevel: [''],
      noofpositions: [''],
      preferedlocation: [''],
      expirydate: [''],
      urgency: [''],
      jobpostingdate: [''],
      joblogo: ['']
    })
  }

  onsubmit = async (value: any) => {
    console.log('json before change',value);

    const file: File = this.jobsForm.value.joblogo.files[0];
    await this.getBaseEncodedStringForLogo(file,value);

    console.log('json after change',value);
    this._enrollmentService.enrolljob(value)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      );
      console.log(value);
  }

  getBaseEncodedStringForLogo = async (fileObject: File,jsonObject: any) => {
    const promiseObject = new Promise((resolve,reject) => {
      const fileReader = new FileReader();

      fileReader.onloadend = (e) => {
        jsonObject.logo = fileReader.result;
        resolve();
      };
      fileReader.readAsDataURL(fileObject);
    });
    return promiseObject;
  }
}
