import { Address } from "./address"

export class Users{
    id: number
    firstName: string
    lastName: string
    role: string
    email:string
    password:string
    address:Address
   // DOB:Date
    
    
    constructor(id:number,fn:string,ln:string,r:string,eml:string, pwd:string,add:Address){
        this.id=id
        this.firstName=fn
        this.lastName=ln
        this.role=r
        this.email=eml
        this.password=pwd
        this.address =add
        //this.DOB = dob
    }
}