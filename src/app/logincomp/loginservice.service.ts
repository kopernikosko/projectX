import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }

  isUserLoggedIn: boolean = false;

  login(userName: string, password: string): Observable<boolean> {

    if(userName == "admin" && password == "admin") {
      this.isUserLoggedIn = true;
    }

    if(this.isUserLoggedIn) {
    localStorage.setItem('isUserLoggedIn', userName);
    }

    return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );

  }

  checkLogIn(): any{

    return localStorage.getItem('isUserLoggedIn');
  }

}
