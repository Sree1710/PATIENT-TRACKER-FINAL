import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patienthomepage',
  templateUrl: './patienthomepage.component.html',
  styleUrls: ['./patienthomepage.component.css']
})
export class PatienthomepageComponent implements OnInit {
dataa={
  patientUsername:"",
  patientPassword:""
}
  constructor(private api:PatientserviceService, private router:Router) { }

  ngOnInit(): void {
  }
 Plogin(){
  this.api.plogin(this.dataa).subscribe((dataa)=>{
    if(dataa.success === true){
      this.api.savepat(dataa)
      this.router.navigate(['/pm'])
    }
    else{
      alert(dataa.success)
    }
  })
 }
}
