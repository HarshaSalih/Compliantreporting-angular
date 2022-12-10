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
  searchUsers:any=[]


  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)

    this.api.userLogin(data).subscribe(
      (response:any)=>
      {
        console.log(response)
       
        if(response.length==0)
        {
          alert("Invalid credential")
          this.username=""
          this.password=""
        }
        else
        {
          this.searchUsers=response;
          let userid=response.userid
          console.log(userid)
          localStorage.setItem("userInfo",this.searchUsers.userid)
          this.route.navigate(["/viewprofile"])
        // }
        // console.log(data)
        // if (response.status=="success") {
        //   let userId=response.userId
          
        //   alert("Login success")
          
        // } else {
        //   alert(response.message)
          
        }
      }
    )
  }

}
