import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.css']
})
export class Admin1Component implements OnInit {

  constructor(private api:PatientserviceService ) { 
    api.patDetail().subscribe(
      (response=>{
       this.data2=response
    }))
  }

  ngOnInit(): void {
  }
data2:any=[]
}
