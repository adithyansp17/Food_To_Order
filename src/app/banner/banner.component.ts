import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Users } from '../models/Users';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  user:UserService
  arrUser:Users[]=[]
  constructor(private router:Router,private users:UserService){
    this.user=users
    
  }
  
  Validate(email:HTMLInputElement,pwd:HTMLInputElement){
    console.log(email.value+", "+pwd.value)
     this.users.getUsers().subscribe(data=>{
      this.arrUser = data
     })

    for(var i=0;i<this.arrUser.length;++i){
      if(email.value == this.arrUser[i].email && pwd.value == this.arrUser[i].password){
        if(this.arrUser[i].role=="admin"){
          console.log("here iam")
          localStorage.setItem('role','admin')
          //localStorage.setItem('userid',this.arrUser[i].id.toString())
          this.router.navigate(['/admin'])
        }
        else{
          localStorage.setItem('role','user')
          this.router.navigate(['/home'])
        }
        
      }
      else{
        //alert("Invalid")
        this.router.navigate(['/home'])
      }
    }
  }
  navigateToAddUser(){
    const defaultValue = 'user'; 
    this.router.navigate(['/add-user'], { queryParams: { defaultValue } });
    
  }
}


