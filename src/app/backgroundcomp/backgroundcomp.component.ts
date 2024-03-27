import { Component } from '@angular/core';

@Component({
  selector: 'app-backgroundcomp',
  templateUrl: './backgroundcomp.component.html',
  styleUrl: './backgroundcomp.component.css'
})
export class BackgroundcompComponent {



  dataX = [{sector:"Artificial Inteligence",values:["Natural Language Processing","Machine Learning","Deep Learning","Inteligent Agents and Multiagent Systems","Robotic Systems and Applications","Multimedia ML","Graphs ML"]},
  {sector:"Telecommunications and Networks",values:["Satelite Communications","Mobile Applications","Cellular Networks","Software Defined Networking","Broadband communications"]},
  {sector:"CyberSecurity",values:["Network Security", "Aplication Security", "Web App Penetration testing", "Mobile App Penetration Testing", "Applied Cryptography", "Reverse Engineering", "Risk Assesment"]}]

  
}

