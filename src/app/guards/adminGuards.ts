import { CanActivateFn } from "@angular/router";

export function AdminGuard():CanActivateFn{
    // let role = "admin"
    let role = localStorage.getItem("role") 
    return ()=>{
        if(role == "admin"){
            console.log("here also")
            return true;}
            
        else{
            alert("Sorry no access")
            return false;
         }
        
    }
}