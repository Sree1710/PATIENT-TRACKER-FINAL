import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-portable',
  templateUrl: './portable.component.html',
  styleUrls: ['./portable.component.css']
})
export class PortableComponent implements OnInit {
  username="" 
  password="" 
 
  constructor(private api:PatientserviceService, private router:Router) { }

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
Alogin(){
  if(this.username=="admin@12" && this.password=="admin123"){
    this.router.navigate(['/admin'])
  }
  else{
    alert("invalid credentials")
  }  
  
}

}
