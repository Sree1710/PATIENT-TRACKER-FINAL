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
data7:any=[]

Bapp(){
  this.api.bapp(this.data4).subscribe((data)=>{
    
  })
  alert("success")
}
}
