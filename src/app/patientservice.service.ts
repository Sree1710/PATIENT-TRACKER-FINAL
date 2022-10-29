import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http:HttpClient) { }

doctor:any
patient:any
USER_KEY:any

public savedoc(data:any):any{
  this.doctor=data
}
retrivedoc(){
  return this.doctor
}
public savepat(data:any):any{
  this.patient=data
}
retrivepat(){
  return this.patient
}

public saveUser(user: any): void {
  window.sessionStorage.removeItem(this.USER_KEY);
  window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));

}

public getUser(): any {
  const user = window.sessionStorage.getItem(this.USER_KEY);
  if (user) {
    return JSON.parse(user);
  }
}













  dregister(data:any){
    return this.http.post<any>('http://localhost:3200/dr',data)
  }
  pregister(dataa:any){
    return this.http.post<any>('http://localhost:3200/pr',dataa)
  }
  dlogin(data3:any){
    return this.http.post<any>('http://localhost:3200/dlogin',data3)
  }
  plogin(data5:any){
    return this.http.post<any>('http://localhost:3200/plogin',data5)
  }
  bapp(data4:any){
    return this.http.post<any>('http://localhost:3200/bp',data4)
  }
  docDetail=()=>
  {
    return this.http.get('http://localhost:3200/docDetail')
  }
  patDetail=()=>
  {
    return this.http.get('http://localhost:3200/patDetail')
  }
  DocDetail=()=>
  {
    return this.http.get('http://localhost:3200/DocDetail')
  }
  viewApp=(i:any)=>
  {
    return this.http.post('http://localhost:3200/docviewApp',i)
  }
  ViewApp=()=>
  {
    return this.http.get('http://localhost:3200/ViewApp')
  }
}
