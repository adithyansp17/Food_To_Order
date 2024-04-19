export class Dishes{
    id: number
    dName: string
    price: number
    r_id: number
    img_path:string
    
    
    constructor(id:number,n:string,p:number,rid:number,pa:string){
        this.id=id
        this.dName=n
        this.price=p
        this.r_id=rid
        this.img_path=pa
    }
}