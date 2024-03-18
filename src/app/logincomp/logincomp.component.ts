import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrl: './logincomp.component.css'
})
export class LogincompComponent {

  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  username:string = "uname"; 
  password:string = "pass"; 

  login() {
    this.username = "new"
    this.password = "new2"
  }

  send() {
    this.onRefresh.emit();
  }

}
