import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private api:ApiService,private route:Router){}

  
  username=""
  password=""


  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)

    this.api.userLogin(data).subscribe(
      (response:any)=>
      {
        console.log(data)
        if (response.status=="success") {
          localStorage.setItem("userInfo",response.userId)
          // alert("Login success")
          
        } else {
          alert("Login failed")
          
        }
      }
    )
  }

}
