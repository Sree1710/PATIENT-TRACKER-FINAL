import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-doctorhomepage',
  templateUrl: './doctorhomepage.component.html',
  styleUrls: ['./doctorhomepage.component.css']
})
export class DoctorhomepageComponent implements OnInit {

  data = {
    doctorUsername: "",
    doctorPassword: ""
  }

  constructor(private api: PatientserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  Dlogin() {
    this.api.dlogin(this.data).subscribe((data) => {
      if (data.success === true) {
        this.api.savedoc(data)
        this.api.saveUser(data)
        this.router.navigate(['/dm'])
      } else {
        alert(data.success)
      }
    })
  }
}
