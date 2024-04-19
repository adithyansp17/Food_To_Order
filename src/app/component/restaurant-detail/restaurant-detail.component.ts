import { Component } from '@angular/core';
import { Resturants } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurantService';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.scss'
})
export class RestaurantDetailComponent {
r:Resturants = new Resturants(0,'',0,[],[])
constructor(private activatedRoute:ActivatedRoute,private rs:RestaurantService){
  this.activatedRoute.params.subscribe((params:Params)=>{
    var rid = params['id']
    console.log("Restaurant id from path:" ,rid)
    this.rs.getRestById(rid).subscribe(data=>{
      this.r = data 
      console.log(this.r)
    })
  })
}
}
