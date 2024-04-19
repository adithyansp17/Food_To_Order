import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { HomeComponent } from './component/home/home.component';
import { DishesComponent } from './component/dishes/dishes.component';
import { AdminComponent } from './component/admin/admin.component';
import { RestaurantDetailComponent } from './component/restaurant-detail/restaurant-detail.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { RestaurantService } from './services/restaurantService';
import { DishService } from './services/dish.service';
import { UserService } from './services/user.service';
import { CartComponent } from './component/cart/cart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ViewUserComponent } from './component/users/view-user/view-user.component';
import { AddUserComponent } from './component/users/add-user/add-user.component';
import { UpdateUserComponent } from './component/users/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddRestauarntComponent } from './component/restaurants/add-restauarnt/add-restauarnt.component';
import { ViewRestauarntComponent } from './component/restaurants/view-restauarnt/view-restauarnt.component';
import { EditRestauarntComponent } from './component/restaurants/edit-restauarnt/edit-restauarnt.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    RestaurantComponent,
    AboutUsComponent,
    HomeComponent,
    DishesComponent,
    AdminComponent,
    RestaurantDetailComponent,
    NotFoundComponent,
    //SecondComponent,
    CartComponent,
    ViewUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    AddRestauarntComponent,
    ViewRestauarntComponent,
    EditRestauarntComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatOptionModule,
    MatIconModule,
    MatSelectModule,
    
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [RestaurantService, DishService, UserService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
