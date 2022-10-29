import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  constructor(private api:PatientserviceService) {

    this.data=this.api.getUser()
    if(this.data){
    console.log(this.data)
    
    api.viewApp(this.data).subscribe((response=>{
      this.data3=response
      console.log(this.data3)
    }))
    }
   }
  
  ngOnInit(): void {
  }
data:any=[]
data3:any=[]
}
