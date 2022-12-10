import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  constructor(private api:ApiService){}

  
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
        if (response.status=="success") {
          console.log(response)
          alert("User registration success")
          
        } else {
          alert("User registration failed")
          
        }
      }
    )
  }
}
  

  



