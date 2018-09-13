import { Component, OnInit } from '@angular/core';
import {DishService } from '../services/dish.service';
import {CartService} from '../services/cart.service';
import {Dish} from '../models/Dish';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.scss']
})
export class PizzaMenuComponent implements OnInit {

  pizzas$: Observable<Dish[]>;

  constructor(private dishService: DishService, private cartService: CartService) { }

  ngOnInit() {
    this.pizzas$ = this.dishService.getPizzas();
  }

  addToCart(dish: Dish): void {
    this.cartService.addToCart(dish);
  }
}


