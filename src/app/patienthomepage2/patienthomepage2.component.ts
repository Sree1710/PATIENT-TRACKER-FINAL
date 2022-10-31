import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patienthomepage2',
  templateUrl: './patienthomepage2.component.html',
  styleUrls: ['./patienthomepage2.component.css']
})
export class Patienthomepage2Component implements OnInit {
dataa={
  patientName:"",
  patientAge:"",
  patientPhonenumber:"",
  patientHistory:"",
  patientUsername:"",
  patientPassword:""
}
  constructor(private api:PatientserviceService) { }

  ngOnInit(): void {
    (() => {
      'use strict'
    
      const forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms).forEach(form => {
        form.addEventListener('submit',function(event:any){
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
  }

  Pregister(){
  this.api.pregister(this.dataa).subscribe((data)=>{
   
  })
  
}
}
