export class Carts{
    id: number
    amount: number
    user_id: number
    
    
    constructor(id:number,p:number,rid:number){
        this.id=id
        this.amount = p
        this.user_id = rid
    }
}