import { Component } from '@angular/core';


@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrl: './logincomp.component.css'
})
export class LogincompComponent {

  username:string = "uname"; 
  password:string = "pass"; 

  login() {
    this.username = "new"
    this.password = "new2"
  }

}
