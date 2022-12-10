import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-compliant',
  templateUrl: './add-compliant.component.html',
  styleUrls: ['./add-compliant.component.css']
})
export class AddCompliantComponent {

  compliant=""
  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any=
    {
  
      "userId":localStorage.getItem("userInfo"),
      "complaints":this.compliant
       
      
   }

   this.api.addCompliant(data).subscribe(
    (response:any)=>
    {
      console.log(response)
    }
   )
  }

}
