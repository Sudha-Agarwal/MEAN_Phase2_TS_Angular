import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  getQuestionsFromServer():Observable<Quiz[]>{
    return this.httpClient.get<Quiz[]>(this.baseUrl + "/api/data");    
  }

  checkLogin(username:string,password:string):Observable<any>{    
    return this.httpClient.post<boolean>('api/check-login', {username,password});
  }
}
