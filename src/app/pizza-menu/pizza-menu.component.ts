import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import {CartService} from '../services/cart.service';
import {Dish} from '../models/Dish';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.scss']
})
export class PizzaMenuComponent implements OnInit {

  pizzas: Dish[];

  constructor(private dishService: DishService, private cartService: CartService) { }

  ngOnInit() {
    this.getPizzas();
  }

  getPizzas(): void {
    this.dishService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
  }

  addToCart(dish: Dish): void {
    this.cartService.addToCart(dish);
  }
}


