import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RegisterserviceService } from './registerservice.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrl: './registercomponent.component.css'
})
export class RegistercomponentComponent {

  requiredForm: FormGroup;

  constructor(private fb: FormBuilder, private regService: RegisterserviceService, private router: Router) {
    this.requiredForm = this.fb.group({first: ['', Validators.required ],last:['', Validators.required],
     email:['', [Validators.email,Validators.required]], phone:['',[Validators.required, Validators.pattern('[0-9 ]{9}')]], password:['',[Validators.minLength(3), Validators.required]]});
  }

  username: string = "";
  exist: string = "";
  data: string = "";
  status: string = "No action";
  url: string = "";


  save() {

    this.status = this.regService.save(this.requiredForm.value)

    if(this.status == "Doone") {
      this.url = "/myinquiries/" + this.requiredForm.value.first;
      this.router.navigateByUrl(this.url);
    }

    
  }
}
