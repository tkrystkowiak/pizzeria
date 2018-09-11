import { Component, OnInit } from '@angular/core';
import {DishService} from '../dish.service';
import {Dish} from '../Dish';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-drinks-menu',
  templateUrl: './drinks-menu.component.html',
  styleUrls: ['./drinks-menu.component.scss']
})
export class DrinksMenuComponent implements OnInit {

  drinks: Dish[];

  constructor(private dishService: DishService, private cartService: CartService) { }

  ngOnInit() {
    this.getDrinks();
  }

  getDrinks(): void {
    this.dishService.getDrinks()
      .subscribe(drinks => this.drinks = drinks);
  }

  addToCart(dish: Dish): void {
    this.cartService.addToCart(dish);
  }

}
