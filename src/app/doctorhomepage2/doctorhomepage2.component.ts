import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-doctorhomepage2',
  templateUrl: './doctorhomepage2.component.html',
  styleUrls: ['./doctorhomepage2.component.css']
})
export class Doctorhomepage2Component implements OnInit {
 data={
  doctorName:"",
  doctorDepartment:"",
  doctorUsername:"",
  doctorPassword:"",
  doctorUniqueId: ""
 }
  constructor(private api:PatientserviceService) { }

  ngOnInit(): void {

  }
  
  
Dregister()
{
  this.api.dregister(this.data).subscribe((data)=>{
   
  })
  
  
}
}
