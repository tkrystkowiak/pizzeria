import {Dish} from './Dish';
import {Injectable} from '@angular/core';

export class CartCache {
  dishes: Dish[];

  add(dish: Dish) {
    this.dishes.push(dish);

  }

  delete(i: number) {
    delete this.dishes[i];
  }

}
