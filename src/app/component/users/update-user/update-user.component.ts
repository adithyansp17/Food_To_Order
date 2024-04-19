import { Component } from '@angular/core';
import { Address } from '../../../models/address';
import { Users } from '../../../models/Users';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  arrUsers:Users[]=[]
  arrAdd:Address[]=[]
  tempUser:Users = new Users(0,'','','','','',new Address(0,'','','','','',''))
  user:Users = new Users(0,'','','','','',new Address(0,'','','','','',''))
  tempAdd:Address = new Address(0,'','','','','','')
  updateUserForm:FormGroup;
  idup:number=0

  constructor(fb:FormBuilder,private us:UserService){
    this.updateUserForm = fb.group({
      'id':[0], 
      'firstName':[''],
      'lastName':[''],
      'DOB':[''],
      'role':[''],
      'email':[''],
      'password':[''],
      'houseno':[''],
      'street':[''],
      'area':[''],
      'city':[''],
      'pincode':[''],
      'country':['']
    });
    us.getUsers().subscribe(data=>{
      this.arrUsers = data
    })
  }
  OnSubmit(updateUserFormValue: any):void
  {
    console.log('Submited: ',updateUserFormValue)
    console.log(updateUserFormValue.firstName)
    this.tempAdd = new Address(10,updateUserFormValue.houseno,updateUserFormValue.street,updateUserFormValue.area,updateUserFormValue.city,updateUserFormValue.pincode,updateUserFormValue.country)
    this.tempUser = new Users(this.idup,updateUserFormValue.firstName,updateUserFormValue.lastName,updateUserFormValue.role,updateUserFormValue.email,updateUserFormValue.password,this.tempAdd)
    this.us.UpdateUser(this.idup)
  }

  onChangeType(evt: any) {
    console.log(evt.target.value);
    var idob = evt.target.value;
    this.idup = parseInt(idob.split(':')[0].trim());
    console.log('This.idup: ', this.idup);
  
    this.us.getUserById(this.idup).subscribe(data => {
      console.log('User data:', data); 
      this.user = data;
      if (this.user && this.user.address) {
        this.updateUserForm.get('firstName')?.setValue(this.user.firstName);
        this.updateUserForm.get('lastName')?.setValue(this.user.lastName);
        this.updateUserForm.get('role')?.setValue(this.user.role);
        this.updateUserForm.get('email')?.setValue(this.user.email);
        this.updateUserForm.get('password')?.setValue(this.user.password);
        this.updateUserForm.get('houseno')?.setValue(this.user.address.houseno);
        this.updateUserForm.get('street')?.setValue(this.user.address.street);
        this.updateUserForm.get('area')?.setValue(this.user.address.area);
        this.updateUserForm.get('city')?.setValue(this.user.address.city);
        this.updateUserForm.get('pincode')?.setValue(this.user.address.pincode);
        this.updateUserForm.get('country')?.setValue(this.user.address.country);
      }
    });
  }
  
  
 }
