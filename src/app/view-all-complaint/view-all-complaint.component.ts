import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-complaint',
  templateUrl: './view-all-complaint.component.html',
  styleUrls: ['./view-all-complaint.component.css']
})
export class ViewAllComplaintComponent {

  constructor(private api:ApiService){
    api.viewAllCompliant().subscribe(
      (response:any)=>{
        this.allComplaints=response
      }
    )
  }

  allComplaints:any=[]

}
