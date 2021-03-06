import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from '../models/Dish';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart: Dish[];

  constructor(private http: HttpClient) {
    this.cart = [];
  }

  getCart(): Dish[] {
    return this.cart;
  }

  addToCart(dishToSave: Dish): void {
    this.cart.push(dishToSave);
  }

  remove(dish: Dish): void {
    const index = this.cart.indexOf(dish, 0);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
