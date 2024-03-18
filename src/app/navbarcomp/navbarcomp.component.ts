import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrl: './navbarcomp.component.css'
})
export class NavbarcompComponent {

  @Input() title: string = '';

  status = true;

  change_status() {
    this.status = false;
  }
  
  togle() {
    this.status = false;
  }
}
