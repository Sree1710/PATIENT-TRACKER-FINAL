import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-doctorportal',
  templateUrl: './doctorportal.component.html',
  styleUrls: ['./doctorportal.component.css']
})
export class DoctorportalComponent implements OnInit {

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
