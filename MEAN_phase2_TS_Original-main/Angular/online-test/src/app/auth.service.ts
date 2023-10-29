import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth$:Observable<boolean>;

  private isAuthenticated = false;
  constructor(private ds:DataService) { 
    
  }

  
  login(username: string, password: string):Observable<boolean> {
    this.isAuth$ = this.ds.checkLogin(username,password);
    return this.isAuth$;


    // Perform authentication logic here, e.g. check if username and password match in database
    /*if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      return true;
    }
    return false;*/
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
