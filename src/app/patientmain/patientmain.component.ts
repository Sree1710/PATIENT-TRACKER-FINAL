import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patientmain',
  templateUrl: './patientmain.component.html',
  styleUrls: ['./patientmain.component.css']
})
export class PatientmainComponent implements OnInit {

  constructor(private api:PatientserviceService) {

    this.data=this.api.retrivepat()
    console.log(this.data)
    if(this.data){
      console.log(this.data)
      console.log(this.data.dataa.patientName)
      this.data2=this.data.dataa.patientName
    }
  }

  ngOnInit(): void {
  }

data:any=[]
data2:any=[]

}
