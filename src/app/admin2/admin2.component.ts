import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-admin2',
  templateUrl: './admin2.component.html',
  styleUrls: ['./admin2.component.css']
})
export class Admin2Component implements OnInit {

  constructor(private api:PatientserviceService) {
    api.docDetail().subscribe(
      (response=>{
       this.data=response
    }))
   }

  ngOnInit(): void {
  }
  data:any=[]
}
