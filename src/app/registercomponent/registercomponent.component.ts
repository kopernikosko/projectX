import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrl: './registercomponent.component.css'
})
export class RegistercomponentComponent {

  requiredForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.requiredForm = this.fb.group({first: ['', Validators.required ],last:['', Validators.required]});
  }

  status:string = "nee";

  save() {}
}
