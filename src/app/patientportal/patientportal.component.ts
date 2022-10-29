import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patientportal',
  templateUrl: './patientportal.component.html',
  styleUrls: ['./patientportal.component.css']
})
export class PatientportalComponent implements OnInit {

  constructor(private api:PatientserviceService) {
    api.patDetail().subscribe(
      (response=>{
       this.dataa=response
    }))
   }

  ngOnInit(): void {
  }
dataa:any=[]
}
