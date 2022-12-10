import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  userRegistration=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8081/userReg",dataToSend);
  }

  userLogin=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8081/userLogin",dataToSend);
  }

  viewProfile=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8081/viewProfile",dataToSend)
  }

  addCompliant=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8081/addCompliant",dataToSend)
  }
}
