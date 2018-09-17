import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {CartComponent} from './cart/cart.component';
import {PizzaMenuComponent} from './pizza-menu/pizza-menu.component';
import {PastaMenuComponent} from './pasta-menu/pasta-menu.component';
import {DrinksMenuComponent} from './drinks-menu/drinks-menu.component';
import {HttpClientModule} from '@angular/common/http';
import {AddressComponent} from './address/address.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {DishDetailComponent} from './dish-detail/dish-detail.component';
import {DishListComponent} from './dish-list/dish-list.component';
import {OrderListComponent} from './order-list/order-list.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {RoleGuard} from './role-guard';
import { DishAddFormComponent } from './dish-detail/dish-add-form/dish-add-form.component';
import { DishModifyFormComponent } from './dish-detail/dish-modify-form/dish-modify-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PizzaMenuComponent,
    PastaMenuComponent,
    DrinksMenuComponent,
    AddressComponent,
    LoginComponent,
    DishDetailComponent,
    DishListComponent,
    OrderListComponent,
    OrderDetailComponent,
    DishAddFormComponent,
    DishModifyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production},
      ),
    HttpClientModule,
    FormsModule
  ],
  providers: [RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
