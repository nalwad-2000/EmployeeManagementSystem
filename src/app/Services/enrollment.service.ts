import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  url = 'http://localhost:3000/jobs';
  _url = 'http://localhost:3000/employees';
  parsedstatus: any;
  parsedcurrenstatus:any;
  parsedscheduleinterview: any;
  parsedinterviewername: any;
  parsedinterviewdate: any;
  parsedinterviewtime: any;
  parsednotes: any;
  fileType: string;
  candidateDetails = {};
  candidateDetailsforgraph = {};
  jobDetailsforgraph = {}; 
  jobDetailsforpiegraph  = {};
  jobDetailsforcanpiegraph = {};
  constructor(private _http:HttpClient) { }

  enroll(value: any){
    return this._http.post<any>(this._url, value);    //this is for json server
    //return this._http.post<any>("http://localhost:5000/employees",value);   //this is for sql server 
  }

  enrolljob(value:any){
    return this._http.post<any>(this.url,value);    //this is for json server
    //return this._http.post<any>("http://localhost:5000/jobs",value);   //this is for sql server
  }

  explore() : Observable<any[]>{
    return this._http.get<any[]>(this._url);
  }

  explorejob(): Observable<any[]>{
    return this._http.get<any[]>(this.url);   //this is for json server 
    //return this._http.get<any[]>("http://localhost:5000/jobs")    //this is for sql server
  }

  exploredetail(_id:number) {
      return this._http.get("http://localhost:3000/employees/"+_id);
  }

  explorejobdetail(_id:number) {
     return this._http.get("http://localhost:3000/jobs/"+_id);
  }

  updatestatus(_id:number,data) {
    return this._http.patch("http://localhost:3000/employees/"+_id,data);
  }

  updatecurrentstatus(_id:number,data) {
    return this._http.patch("http://localhost:3000/employees/"+_id,data);
  }

  updatescheduleinterview(_id:number,data) {
    return this._http.patch("http://localhost:3000/employees/"+_id,data);
  }

  updateinterviewername(_id:number,data) {
    return this._http.patch("http://localhost:3000/employees/"+_id,data);
  }

  updateinterviewdate(_id:number,data){
    return this._http.patch("http://localhost:3000/employees/"+_id,data);
  }

  updateinterviewtime(_id:number,data){
    return this._http.patch("http://localhost:3000/employees/"+_id,data);
  }

  updatenotes(_id:number,data){
    return this._http.patch("http://localhost:3000/employees/"+_id,data);
  }

  updateemailfornotes(_id:number,data){
    return this._http.patch("http://localhost:3000/employees/"+_id,data);
  }



}

