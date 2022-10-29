import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patienthomepage2',
  templateUrl: './patienthomepage2.component.html',
  styleUrls: ['./patienthomepage2.component.css']
})
export class Patienthomepage2Component implements OnInit {
dataa={
  patientName:"",
  patientAge:"",
  patientPhonenumber:"",
  patientHistory:"",
  patientUsername:"",
  patientPassword:""
}
  constructor(private api:PatientserviceService) { }

  ngOnInit(): void {
  }

  Pregister(){
  this.api.pregister(this.dataa).subscribe((data)=>{
   
  })
  
}
}
