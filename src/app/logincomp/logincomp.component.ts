import { Component, Output, EventEmitter } from '@angular/core';
import { LoginserviceService } from './loginservice.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrl: './logincomp.component.css'
})
export class LogincompComponent {

  constructor(private LoginService: LoginserviceService, private router: Router) {}

  username:string = "uname"; 
  password:string = "pass"; 
  

  login() {
    this.LoginService.login(this.username, this.password)
    .subscribe( data => { 
       console.log("Is Login Success: " + data); 
 
      if(data) { 
        this.router.navigate(['/myinquiries']); 
      } else {
        this.router.navigate(['/register'])
      } 
 });
  }

}
