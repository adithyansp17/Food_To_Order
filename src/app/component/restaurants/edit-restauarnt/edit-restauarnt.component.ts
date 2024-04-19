import { Component } from '@angular/core';
import { Address } from '../../../models/address';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../../../services/restaurantService';
import { Resturants } from '../../../models/restaurant';

@Component({
  selector: 'app-edit-restauarnt',
  templateUrl: './edit-restauarnt.component.html',
  styleUrl: './edit-restauarnt.component.scss'
})
export class EditRestauarntComponent {
//   count:number = 0;
//   countSecondFormSubmit: number = 0;
//   restaurant:Resturants;
//   arrAdd:Address[] = []
//   isLinear = false;
//   addId:number = 1;
//   idup:number=0

//   public addressListForm:FormGroup

//   firstFormGroup = this.formBuilder.group({
//     rNameCtrl: ['', Validators.required],
//     rLocationCtrl: ['', Validators.required],
//   });

//   secondFormGroup = this.formBuilder.group({
//     secondCtrl: ['', Validators.required],
//   });
  

//   constructor(private formBuilder:FormBuilder, private restaurantService:RestaurantService){
//     this.restaurant = new Resturants(0,"",0,[],[])

//     this.addressListForm = this.formBuilder.group({
//       addresses:this.formBuilder.array([this.createAddressListFormGroup()])
//     })
//   }

//   createAddressListFormGroup():FormGroup{
//     this.count++;
//     return new FormGroup({
//       'houseno':new FormControl('',Validators.required),
//       'street':new FormControl('',Validators.required),
//       'area':new FormControl('',Validators.required),
//       'city':new FormControl('',Validators.required),
//       'pincode':new FormControl('',Validators.required),
//       'country':new FormControl('',Validators.required),
//     })
//   }

 
// saveFirstStepData(formData: FormGroup) {
// console.log(formData.value);
// this.restaurantService.getRestaurant().subscribe(data=>{
//   const largestId = Math.max(...data.map(item=>item.id))
//   console.log(largestId)
//   this.restaurant.id = largestId + 1;
// })
// this.restaurant.rName = formData.value.rNameCtrl;
// this.restaurant.location = formData.value.rLocationCtrl;

// }


//   saveSecondStepData(formdata:FormGroup){
//     this.countSecondFormSubmit++;
//     console.log(this.restaurant);
//     if(this.countSecondFormSubmit==this.count){
//       console.log(formdata);
//     }
//     let addressArr = Object.values(formdata);
//     console.log(addressArr[0])
    
//     addressArr[0].forEach((add:any)=>{console.log(add)
//       this.restaurant.arrAddress.push(new Address(this.addId++,add.houseno,add.street,add.area,add.city,add.pincode,add.country))
//     })


//     console.log(this.restaurant);


//      this.restaurantService.addRestaurant(this.restaurant).subscribe(data=>{
//        console.log(data)
//      })
//   }

//   Addresses():FormArray{
//     return this.addressListForm.get("addresses") as FormArray
//   }

//   public addItineryFormGroup() {
//     const addresses = this.addressListForm.get('addresses') as FormArray
//     addresses.push(this.createAddressListFormGroup())
//   }
  
//   public removeOrClearItinery(i: number) {
//     const addresses = this.addressListForm.get('addresses') as FormArray
//     if (addresses.length > 1) {
//       addresses.removeAt(i)
//     } else {
//       addresses.reset()
//     }
//   }
//   onChangeType(evt: any) {
//     console.log(evt.target.value);
//     var idob = evt.target.value;
//     this.idup = parseInt(idob.split(':')[0].trim());
    //console.log('This.idup: ', this.idup); 
  
    // this.us.getUserById(this.idup).subscribe(data => {
    //   console.log('User data:', data); 
    //   this.user = data;
    //   if (this.user && this.user.address) {
    //     this.updateUserForm.get('firstName')?.setValue(this.user.firstName);
    //     this.updateUserForm.get('lastName')?.setValue(this.user.lastName);
    //     this.updateUserForm.get('role')?.setValue(this.user.role);
    //     this.updateUserForm.get('email')?.setValue(this.user.email);
    //     this.updateUserForm.get('password')?.setValue(this.user.password);
    //     this.updateUserForm.get('houseno')?.setValue(this.user.address.houseno);
    //     this.updateUserForm.get('street')?.setValue(this.user.address.street);
    //     this.updateUserForm.get('area')?.setValue(this.user.address.area);
    //     this.updateUserForm.get('city')?.setValue(this.user.address.city);
    //     this.updateUserForm.get('pincode')?.setValue(this.user.address.pincode);
    //     this.updateUserForm.get('country')?.setValue(this.user.address.country);
    //   }
    // });
  // }
}
