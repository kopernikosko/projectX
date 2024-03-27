import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wwoentrycomp',
  templateUrl: './wwoentrycomp.component.html',
  styleUrl: './wwoentrycomp.component.css'
})
export class WwoentrycompComponent {

  @Input() data2show: any;

}
