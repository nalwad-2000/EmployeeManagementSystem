import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'http://localhost:3000/comments';

  constructor(private _http:HttpClient) { }

  enrollcomment(id:number,value:any){
    return this._http.post<any>(this.url, value); 
  }

  explorecomment(_id:number){
    return this._http.get("http://localhost:3000/comments/"+_id)
  }
}

