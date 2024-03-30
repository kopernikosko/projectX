import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../logincomp/loginservice.service';
import { Router } from '@angular/router';
import { InquiryserviceService } from './inquiryservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inquirycomp',
  templateUrl: './inquirycomp.component.html',
  styleUrl: './inquirycomp.component.css'
})
export class InquirycompComponent implements OnInit{

  requiredForm: FormGroup;

  constructor(private fb: FormBuilder, private logService: LoginserviceService,private inqservice: InquiryserviceService, private router: Router){

    this.requiredForm = this.fb.group({first: ['', Validators.required ], domain: ['', Validators.required], details: ['', Validators.required]})
  }
  
  uname: any;
  inquiries: any;
  val:any;

  
  ngOnInit(): void {
    this.uname = this.logService.checkLogIn();

    if(this.uname == "new") {
      this.router.navigate(['/login']);
    } else {

      this.inquiries = this.inqservice.get(this.uname)
      this.val = this.inquiries[0].name;

    }
  }

  save(){
    this.val = this.inqservice.save(this.requiredForm.value);
  }
  


}