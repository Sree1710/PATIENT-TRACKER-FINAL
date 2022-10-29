import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
data4={
  bookname:"",
  bookage:"",
  bookdate:"",
  bookdoc:""
}
  constructor(private api:PatientserviceService) {
    api.DocDetail().subscribe((response=>{
      this.data7=response
    }))
   }

  ngOnInit(): void {
  }
data7:any=[]

Bapp(){
  this.api.bapp(this.data4).subscribe((data)=>{
    
  })
}
}
