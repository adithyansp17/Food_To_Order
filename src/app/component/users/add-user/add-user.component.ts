import { Component } from '@angular/core';
import { Users } from '../../../models/Users';
import { Address } from '../../../models/address';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';

export function DOBValidator (control: AbstractControl): ValidationErrors | null { 
  const eighteenYearsInMillis = 5.67648e11;
  let birthDate = new Date(control.value);
  //console.log(birthDate);
  if (new Date().getTime() - new Date(birthDate).getTime() <= eighteenYearsInMillis)
  return { invalidDOB: true };
  return null;
  }

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  arrUsers:Users[]=[]
  arrAdd:Address[]=[]
  tempUser:Users = new Users(0,'','','','','',new Address(0,'','','','','',''))
  tempAdd:Address = new Address(0,'','','','','','')
  addUserForm:FormGroup;
  firstName: AbstractControl;
  lastName: AbstractControl;
  DOB: AbstractControl;
  role: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  houseno: AbstractControl;
  street: AbstractControl;
  area: AbstractControl;
  city: AbstractControl;
  pincode: AbstractControl;
  country: AbstractControl;

  constructor(fb:FormBuilder,private us:UserService,private route: ActivatedRoute){
    this.addUserForm = fb.group({
      'firstName':['',Validators.required],
      'lastName':['',Validators.required],
      'DOB':['',Validators.compose([Validators.required,DOBValidator])],
      'role':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required],
      'houseno':['',Validators.required],
      'street':['',Validators.required],
      'area':['',Validators.required],
      'city':['',Validators.required],
      'pincode':['',Validators.required],
      'country':['',Validators.required]
    });
    this.firstName = this.addUserForm.controls['firstName']
    this.lastName = this.addUserForm.controls['lastName'];
    this.DOB = this.addUserForm.controls['DOB'];
    this.role = this.addUserForm.controls['role'];
    this.email = this.addUserForm.controls['email'];
    this.password = this.addUserForm.controls['password'];
    this.houseno = this.addUserForm.controls['houseno'];
    this.street = this.addUserForm.controls['street'];
    this.area = this.addUserForm.controls['area'];
    this.city = this.addUserForm.controls['city'];
    this.pincode = this.addUserForm.controls['pincode'];
    this.country = this.addUserForm.controls['country'];

    this.route.queryParams.subscribe(params => {
      const defaultValue = params['defaultValue'];
      if (defaultValue) {
        this.addUserForm.patchValue({
          role: defaultValue,
        });
        this.addUserForm.get('role')?.disable(); // Disable the 'role' field after patching the value
      }
    });
    
    
  }
  OnSubmit(addUserFormValue: any):void
  {
    console.log('Submited: ',addUserFormValue)
    console.log(addUserFormValue.firstName)
    this.tempAdd = new Address(10,addUserFormValue.houseno,addUserFormValue.street,addUserFormValue.area,addUserFormValue.city,addUserFormValue.pincode,addUserFormValue.country)
    this.tempUser = new Users(5,addUserFormValue.firstName,addUserFormValue.lastName,addUserFormValue.role,addUserFormValue.email,addUserFormValue.password,this.tempAdd)
    this.us.AddUser(this.tempUser)
  }
}
