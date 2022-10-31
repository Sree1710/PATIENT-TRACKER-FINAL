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
  
  
Dregister()
{
  this.api.dregister(this.data).subscribe((data)=>{
   
  })
  alert("success")
  
}
}
