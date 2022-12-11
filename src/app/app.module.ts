import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AddCompliantComponent } from './add-compliant/add-compliant.component';
import { ViewComplaintComponent } from './view-complaint/view-complaint.component';
import { ViewAllComplaintComponent } from './view-all-complaint/view-all-complaint.component'

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userregistration",
    component:UserRegistrationComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  
  {
    path:"viewprofile",
    component:ViewProfileComponent
  },
  {
    path:"addcompliant",
    component:AddCompliantComponent
  },
  {
    path:"viewcomplaint",
    component:ViewComplaintComponent
  },
  {
    path:"viewallcomplaint",
    component:ViewAllComplaintComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    NavbarComponent,
    DashboardComponent,
    AdminNavComponent,
    ViewProfileComponent,
    AddCompliantComponent,
    ViewComplaintComponent,
    ViewAllComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
