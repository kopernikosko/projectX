import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrl: './navbarcomp.component.css'
})
export class NavbarcompComponent {

  status = true;

  change_status() {
    this.status = false;
  }
  
}
