import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterserviceService } from './registerservice.service';
@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrl: './registercomponent.component.css'
})
export class RegistercomponentComponent {

  requiredForm: FormGroup;

  constructor(private fb: FormBuilder, private regService: RegisterserviceService) {
    this.requiredForm = this.fb.group({first: ['', Validators.required ],last:['', Validators.required],
     email:['', [Validators.email,Validators.required]], phone:['',[Validators.required, Validators.pattern('[0-9 ]{9}')]], password:['',[Validators.minLength(3), Validators.required]]});
  }

  username: string = "";
  exist: string = "";
  data: string = "";
  status: string = "No action";


  save() {

    this.status = this.regService.save(this.requiredForm.value)
    
  }
}
