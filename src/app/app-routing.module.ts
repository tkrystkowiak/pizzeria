import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PizzaMenuComponent} from './pizza-menu/pizza-menu.component';
import {PastaMenuComponent} from './pasta-menu/pasta-menu.component';
import {DrinksMenuComponent} from './drinks-menu/drinks-menu.component';
import {CartComponent} from './cart/cart.component';
import {AddressComponent} from './address/address.component';
import {LoginComponent} from './login/login.component';
import {DishListComponent} from './dish-list/dish-list.component';
import {DishDetailComponent} from './dish-detail/dish-detail.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrderListComponent} from './order-list/order-list.component';

const routes: Routes = [{path: 'pizzas', component: PizzaMenuComponent},
    {path: 'pastas', component: PastaMenuComponent},
    {path: 'drinks', component: DrinksMenuComponent},
    {path: 'cart', component: CartComponent},
    {path: 'address', component: AddressComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dishes', component: DishListComponent},
    {path: 'dish-detail/:id', component: DishDetailComponent},
    {path: 'orders', component: OrderListComponent},
    {path: 'order-detail/:id', component: OrderDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
