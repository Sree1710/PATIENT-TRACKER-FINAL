import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { DoctorhomepageComponent } from './doctorhomepage/doctorhomepage.component';
import { Doctorhomepage2Component } from './doctorhomepage2/doctorhomepage2.component';
import { DoctormainComponent } from './doctormain/doctormain.component';
import { DoctorportalComponent } from './doctorportal/doctorportal.component';
import { HomeComponent } from './home/home.component';
import { PatienthomepageComponent } from './patienthomepage/patienthomepage.component';
import { Patienthomepage2Component } from './patienthomepage2/patienthomepage2.component';
import { PatientmainComponent } from './patientmain/patientmain.component';
import { PatientportalComponent } from './patientportal/patientportal.component';
import { PortableComponent } from './portable/portable.component';
import { ViewadminComponent } from './viewadmin/viewadmin.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:'p',component:PatientportalComponent},
{path:'d',component:DoctorportalComponent},
{path:'pl',component:PatienthomepageComponent},
{path:'pr',component:Patienthomepage2Component},
{path:'dl',component:DoctorhomepageComponent},
{path:'dr',component:Doctorhomepage2Component},
{path:'log',component:PortableComponent},
{path:'pm',component:PatientmainComponent},
{path:'dm',component:DoctormainComponent},
{path:'admin',component:AdminComponent},
{path:'admin1',component:Admin1Component},
{path:'admin2',component:Admin2Component},
{path:'bp',component:BookappointmentComponent},
{path:'va',component:ViewappointmentComponent},
{path:'vad',component:ViewadminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
