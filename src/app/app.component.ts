import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  status = true;
//na dw to status mhpws ginei me {status}
//dhmiourgw methodo pou na alazei to status apo onclick
change_status() {
  this.status = false;
}
}
