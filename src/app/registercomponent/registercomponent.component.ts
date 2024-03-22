import { Component } from '@angular/core';
import { first } from 'rxjs';
import { RegisterserviceService } from './registerservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrl: './registercomponent.component.css'
})
export class RegistercomponentComponent {

  requiredForm: FormGroup;

  constructor(private registerService: RegisterserviceService, private fb: FormBuilder) {
    this.requiredForm = this.fb.group({first: ['', Validators.required ],last:['', Validators.required], email:['', Validators.email, Validators.required],
     phone:['', Validators.pattern('[0-9 ]{9}')], password: ['',Validators.minLength(3)]});
  }

  username: string = "";
  exist: string = "";
  data: string = "";
  status: string = "No action";

  


  submit() {
    //this.data2 = this.requiredForm.value.last;
    //this.data2 = JSON.stringify(this.requiredForm.value, null, 4)
    

  }

  save() {

    this.exist = this.get(this.requiredForm.value.first);

    if(this.exist != "null") {
      this.status = "Error name already exist";
      return
    }

    this.data = this.requiredForm.value.first + "/" + this.requiredForm.value.last + "/" + this.requiredForm.value.email + "/" + this.requiredForm.value.phone + "/" 
    + this.requiredForm.value.password;

    localStorage.setItem(this.requiredForm.value.first,this.data);

    this.status = "Done";
  }

  get(uname:string): string {
    return localStorage.getItem(uname) || "null";
  }


}
