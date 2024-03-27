import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InquiryserviceService {

  constructor() { }

  data = [{name:"John", age:30, car:1}, {name:"Jack", age:30, car:2}];


  get(name:string): Object {
    return this.data;
  }
}
