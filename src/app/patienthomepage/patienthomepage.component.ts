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
