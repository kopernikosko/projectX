import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../logincomp/loginservice.service';
import { Router } from '@angular/router';
import { InquiryserviceService } from './inquiryservice.service';

@Component({
  selector: 'app-inquirycomp',
  templateUrl: './inquirycomp.component.html',
  styleUrl: './inquirycomp.component.css'
})
export class InquirycompComponent implements OnInit{


  constructor(private logService: LoginserviceService,private inqservice: InquiryserviceService, private router: Router){}
  
  uname: string = this.logService.checkLogIn();
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
  


}