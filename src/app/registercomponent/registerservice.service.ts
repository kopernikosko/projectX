import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  constructor() { }
<<<<<<< HEAD

  exists: string = "";
  data: string = "";

  save(params: any): string {

    if(this.get(params.first) == "null") {

    this.data = params.first + "/" +params.last + "/" + params.email + "/" + params.phone + "/" 
    + params.password;

    localStorage.setItem(params.first,this.data);

    return "Doone";
    } else {

      return "Exists";

    }
  }

  get(uname:string): string {
    return localStorage.getItem(uname) || "null";
  }

=======
>>>>>>> 5fb4d0560262cc1dcb34e6d6282f3cd28ceafbc6
}
