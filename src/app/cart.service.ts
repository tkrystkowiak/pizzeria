import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from './Dish';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: Dish[];

  constructor(readonly http: HttpClient) {
    this.cart = [];
  }

  getCart(): Dish[] {
    return this.cart;
  }

  addToCart(dishToSave: Dish): void {
    this.cart.push(dishToSave);
  }

  remove(dish: Dish): void {
    let index = this.cart.indexOf(dish, 0);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
