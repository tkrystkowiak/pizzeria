import { Component, OnInit } from '@angular/core';
import {DishService} from '../services/dish.service';
import {Dish} from '../models/Dish';
import {CartService} from '../services/cart.service';


@Component({
  selector: 'app-pasta-menu',
  templateUrl: './pasta-menu.component.html',
  styleUrls: ['./pasta-menu.component.scss']
})
export class PastaMenuComponent implements OnInit {

  pastas: Dish[];

  constructor(private dishService: DishService, private cartService: CartService) { }

  ngOnInit() {
    this.getPastas();
  }

  getPastas(): void {
    this.dishService.getPastas()
      .subscribe(pastas => this.pastas = pastas);
    const pastasTest = this.pastas;
  }

  addToCart(dish: Dish): void {
    this.cartService.addToCart(dish);
  }

}
