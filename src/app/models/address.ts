export class Address{
    id: number
    houseno: string
    street: string
    area: string
    city: string
    pincode: string
    country:string
    
    
    constructor(id:number,hno:string,st:string,ar:string,cty:string,pin:string,ctry:string){
        this.id=id
        this.houseno=hno
        this.street = st
        this.area = ar
        this.city = cty
        this.pincode = pin
        this.country = ctry
    }
}