import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-viewadmin',
  templateUrl: './viewadmin.component.html',
  styleUrls: ['./viewadmin.component.css']
})
export class ViewadminComponent implements OnInit {

  constructor(private api:PatientserviceService) {
    api.ViewApp().subscribe((response=>{
      this.data9=response
    }))
   }

  ngOnInit(): void {
  }
data9:any=[]
}
