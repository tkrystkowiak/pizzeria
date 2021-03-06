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
import {OrderDetailComponent} from './order-list/order-detail/order-detail.component';
import {OrderListComponent} from './order-list/order-list.component';
import {RoleGuard} from './role-guard';
import {DishAddFormComponent} from './dish-detail/dish-add-form/dish-add-form.component';
import {DishModifyFormComponent} from './dish-detail/dish-modify-form/dish-modify-form.component';

const routes: Routes = [{path: 'pizzas', component: PizzaMenuComponent},
    {path: 'pastas', component: PastaMenuComponent},
    {path: 'drinks', component: DrinksMenuComponent},
    {path: 'cart', component: CartComponent},
    {path: 'address', component: AddressComponent},
    {path: 'dish-add-form', component: DishAddFormComponent, canActivate: [ RoleGuard]},
    {path: 'dish-modify-form/:id', component: DishModifyFormComponent, canActivate: [ RoleGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'dishes', component: DishListComponent, canActivate: [ RoleGuard]},
    {path: 'dish-detail/:id', component: DishDetailComponent, canActivate: [ RoleGuard]},
    {path: 'orders', component: OrderListComponent, canActivate: [ RoleGuard]},
    {path: 'order-detail/:id', component: OrderDetailComponent, canActivate: [ RoleGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
