import { Component, OnInit } from '@angular/core';
import {Pasta} from '../Pasta';
import {DishService} from '../dish.service';
import {Dish} from '../Dish';
import {CartService} from '../cart.service';


@Component({
  selector: 'app-pasta-menu',
  templateUrl: './pasta-menu.component.html',
  styleUrls: ['./pasta-menu.component.scss']
})
export class PastaMenuComponent implements OnInit {

  pastas: Pasta[];

  constructor(private dishService: DishService, private cartService: CartService) { }

  ngOnInit() {
    this.getPastas();
  }

  getPastas(): void {
    this.dishService.getPastas()
      .subscribe(pastas => this.pastas = pastas);
  }

  addToCart(dish: Dish): void {
    this.cartService.addToCart(dish);
  }

}
