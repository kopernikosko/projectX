import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backgroundentrycomp',
  templateUrl: './backgroundentrycomp.component.html',
  styleUrl: './backgroundentrycomp.component.css'
})
export class BackgroundentrycompComponent {

  @Input() dataentry:any;
}
