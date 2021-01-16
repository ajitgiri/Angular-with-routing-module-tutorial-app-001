import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';


@Injectable({
  providedIn: 'root'
})

export class Employeeservice {

  url="http://localhost:54868/";

  constructor( private http:HttpClient) { } 
 
  createemployee(employee:Employee){
    
    return this.http.post(this.url+'api/Employeemasters',employee)
  }
  loginemployee(loginEmployee: Employee) {
    return this.http.post(this.url + 'api/Login', loginEmployee)
  }
}
