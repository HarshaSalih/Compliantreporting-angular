import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  constructor(private api:ApiService,private route:Router){}

  
  name=""
  address=""
  phone=""
  email=""
  username=""
  password=""

  readValues=()=>
  {
    let data:any={"name":this.name,"address":this.address,"phone":this.phone,"email":this.email,"username":this.username,"password":this.password}
    console.log(data)
    this.api.userRegistration(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("User registration success")
          this.name=""
          this.address=""
          this.phone=""
          this.email=""
          this.username=""
          this.password=""
          this.route.navigate(['/userlogin'])
          }
          else
          {
          alert("Something went wrong")
          
        }
      }
    )
  }
}
  

  



