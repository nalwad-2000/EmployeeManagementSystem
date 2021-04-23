import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
)
export class UsersService {
private_http:HttpClient;
  constructor(private http:HttpClient) {
    this.http=http;
   }

  getAllUsers() : any[]{
    return [  
    {name:'Hrithik',id:101,wat:'@IBM India Pvt Ltd',phno:"9482969164",email:"harshamnalwad@gmail.com",place:"Bangalore",np:"30 Days",status:"First Round",ao:"30-oct-2018",exp:"6 Years"},
    {name:'Max',id:102,wat:'@Infosys India Pvt Ltd',phno:"9482969164",email:"harshamnalwad@gmail.com",place:"Koppal",np:"30 Days",status:"First Round",ao:"30-oct-2018",exp:"5 Years"},
    {name:'John',id:103,wat:'@IBM India Pvt Ltd',phno:"9482969164",email:"harshamnalwad@gmail.com",place:"Mumbai",np:"30 Days",status:"First Round",ao:"30-oct-2018",exp:"4 Years"},
    {name:'Ram',id:104,wat:'@Mindtree India Pvt Ltd',phno:"9482969164",email:"harshamnalwad@gmail.com",place:"Chennai",np:"30 Days",status:"First Round",ao:"30-oct-2018",exp:"3 Years"},
    {name:'Kiran',id:105,wat:'@IBM India Pvt Ltd',phno:"9482969164",email:"harshamnalwad@gmail.com",place:"Delhi",np:"30 Days",status:"First Round",ao:"30-oct-2018",exp:"2 Years"},
    {name:"Mohan",id:106,wat:'@SAP Labs India Pvt Ltd',phno:"9482969164",email:"harshamnalwad@gmail.com",place:"Hubli",np:"30 Days",status:"First Round",ao:"30-oct-2018",exp:"10 Years"},
    {name:"Tan",id:107,wat:'@IBM India Pvt Ltd',phno:"9482969164",email:"harshamnalwad@gmail.com",place:"Bangalore",np:"30 Days",status:"First Round",ao:"30-oct-2018",exp:"5 Years"},
    {name:"San",id:108,wat:'@IBM India Pvt Ltd',phno:"9482969164",email:"harshamnalwad@gmail.com",place:"Mysore",np:"30 Days",status:"First Round",ao:"30-oct-2018",exp:"6 Years"},
    {name:"Harry",id:109,wat:'@IBM India Pvt Ltd',phno:"9482969164",email:"harshamnalwad@gmail.com",place:"Mysore",np:"30 Days",status:"First Round",ao:"30-oct-2018",exp:"9 Years"}
  ] ; 
  }

  getUser(_id:number)
  {
    return this.http.get("http://localhost:3000/user/"+_id);
  }

  getjobs(){
    return [
      {id:"1",name:"Java Developer",exp:"3-5 yrs",loc:"Bangalore"},
      {id:"2",name:"Python Developer",exp:"2-3 yrs",loc:"Baroda"},
      {id:"3",name:"System Manager",exp:"5-6 yrs",loc:"Bangalore"},
      {id:"4",name:".Net Developer",exp:"2-3 yrs",loc:"Baroda"},
      {id:"5",name:"Database Manager",exp:"3-4 yrs",loc:"Bangalore"},
      {id:"6",name:"React Developer",exp:"1-2 yrs",loc:"Baroda"}
    ];
  }

  getAjob(id:number){
    return this.http.get("http://localhost:3000/jobs/"+id)
  }
}
