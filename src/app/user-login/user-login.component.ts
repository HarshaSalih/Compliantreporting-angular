import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private api:ApiService){}

  
  username=""
  password=""


  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)

    this.api.userLogin(data).subscribe(
      (response:any)=>
      {
        if (response.status=="success") {
          alert("Login success")
          
        } else {
          alert("Login failed")
          
        }
      }
    )
  }

}
