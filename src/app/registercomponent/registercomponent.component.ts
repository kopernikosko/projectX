import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterserviceService } from './registerservice.service';
=======
import { first } from 'rxjs';
import { RegisterserviceService } from './registerservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

>>>>>>> 5fb4d0560262cc1dcb34e6d6282f3cd28ceafbc6
@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrl: './registercomponent.component.css'
})
export class RegistercomponentComponent {

  requiredForm: FormGroup;

<<<<<<< HEAD
  constructor(private fb: FormBuilder, private regService: RegisterserviceService) {
    this.requiredForm = this.fb.group({first: ['', Validators.required ],last:['', Validators.required],
     email:['', [Validators.email,Validators.required]], phone:['',[Validators.required, Validators.pattern('[0-9 ]{9}')]], password:['',[Validators.minLength(3), Validators.required]]});
=======
  constructor(private registerService: RegisterserviceService, private fb: FormBuilder) {
    this.requiredForm = this.fb.group({first: ['', Validators.required ],last:['', Validators.required], email:['', Validators.email, Validators.required],
     phone:['', Validators.pattern('[0-9 ]{9}')], password: ['',Validators.minLength(3)]});
>>>>>>> 5fb4d0560262cc1dcb34e6d6282f3cd28ceafbc6
  }

  username: string = "";
  exist: string = "";
  data: string = "";
  status: string = "No action";

<<<<<<< HEAD

  save() {

    this.status = this.regService.save(this.requiredForm.value)
    
  }
=======
  


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


>>>>>>> 5fb4d0560262cc1dcb34e6d6282f3cd28ceafbc6
}
