import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InquiryserviceService } from '../inquirycomp/inquiryservice.service';
import { MyinquiriesserviceService } from './myinquiriesservice.service';

@Component({
  selector: 'app-myinquiriescomp',
  templateUrl: './myinquiriescomp.component.html',
  styleUrl: './myinquiriescomp.component.css'
})
export class MyinquiriescompComponent implements OnInit {

  username: string = "oo";
  data2: any;

  constructor(private route: ActivatedRoute, private router: Router, private inquiriesService: MyinquiriesserviceService) {}

  ngOnInit(): void {
    
    this.username = this.route.snapshot.paramMap.get('param') || 'null';

    if(this.username == "null") {
      this.router.navigate(['/login'])
    } else {
    this.data2 = this.inquiriesService.retrive(this.username);
    }
  }

}
