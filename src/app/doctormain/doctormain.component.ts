import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-doctormain',
  templateUrl: './doctormain.component.html',
  styleUrls: ['./doctormain.component.css']
})
export class DoctormainComponent implements OnInit {

  constructor(private api:PatientserviceService) {
  
    this.data=this.api.retrivedoc()
    console.log(this.data)
    if(this.data){
      console.log(this.data)
      console.log(this.data.doctorName)
      this.data2=this.data.data.doctorName
      
    }
   }

  ngOnInit(): void {

  }
  data:any=[]
  data2:any=[]
}
