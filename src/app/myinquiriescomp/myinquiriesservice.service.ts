import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyinquiriesserviceService {

  constructor() { }

  data = [{name:"John", age:30, car:1}, {name:"Jack", age:30, car:2}];

  

  retrive(uname: string) {

    return this.data;
  }
}
