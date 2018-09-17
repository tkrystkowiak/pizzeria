import {Component, OnInit} from '@angular/core';
import {DishService} from '../services/dish.service';
import {Dish} from '../models/Dish';
import {CartService} from '../services/cart.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-drinks-menu',
  templateUrl: './drinks-menu.component.html',
  styleUrls: ['./drinks-menu.component.scss']
})

export class DrinksMenuComponent implements OnInit {

  drinks$: Observable<Dish[]>;

  constructor(
    private dishService: DishService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.drinks$ = this.dishService.getDrinks();
  }

  addToCart(dish: Dish): void {
    this.cartService.addToCart(dish);
  }

}
