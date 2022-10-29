import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-portable',
  templateUrl: './portable.component.html',
  styleUrls: ['./portable.component.css']
})
export class PortableComponent implements OnInit {
  username="admin@12" 
  password="admin123" 
 
  constructor(private api:PatientserviceService, private router:Router) { }

  ngOnInit(): void {
  }
Alogin(){
  if(this.username && this.password){
    this.router.navigate(['/admin'])
  }
  else{
    alert("invalid credentials")
  }  
  
}

}
