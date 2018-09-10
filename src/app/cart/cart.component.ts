import { Component, OnInit } from '@angular/core';
import {Dish} from '../Dish';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  dishes: Dish[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.getDishes();
  }

  getDishes(): void {
    this.dishes = this.cartService.getCart();
  }

  remove(dish: Dish): void{
    this.cartService.remove(dish);
  }

}
