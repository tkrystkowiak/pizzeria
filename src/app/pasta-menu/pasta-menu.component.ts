import { Component, OnInit } from '@angular/core';
import {DishService} from '../services/dish.service';
import {Dish} from '../models/Dish';
import {CartService} from '../services/cart.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-pasta-menu',
  templateUrl: './pasta-menu.component.html',
  styleUrls: ['./pasta-menu.component.scss']
})
export class PastaMenuComponent implements OnInit {

  pastas$: Observable<Dish[]>;

  constructor(private dishService: DishService, private cartService: CartService) { }

  ngOnInit() {
    this.pastas$ = this.dishService.getPastas();
  }


  addToCart(dish: Dish): void {
    this.cartService.addToCart(dish);
  }

}
