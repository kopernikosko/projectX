import { Component, Input } from '@angular/core';

interface Entries{
  name: string,
  age: number,
  car: number
}

@Component({
  selector: 'app-myinquiriesentrycomp',
  templateUrl: './myinquiriesentrycomp.component.html',
  styleUrl: './myinquiriesentrycomp.component.css'
})
export class MyinquiriesentrycompComponent {

  @Input() data2show:any = null;

  ty = typeof(this.data2show);

}
