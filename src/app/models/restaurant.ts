import { Address } from "./address"
import { Dishes } from "./dishes"
export class Resturants{
    id: number
    rName: string
    user_id: number
    dishlist: Dishes[]
    arrAddress:Address[]
    location:string = ""
    
    constructor(id:number,n:string,uid:number,d:Dishes[],arrAddr:Address[]){
        this.id=id
        this.rName=n
        this.user_id=uid
        this.dishlist=d
        this.arrAddress = arrAddr
    }
}