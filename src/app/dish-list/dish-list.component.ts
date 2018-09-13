import { Component, OnInit } from '@angular/core';
import {Dish} from '../models/Dish';
import {DishService} from '../services/dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  dishes: Dish[];

  availability: boolean;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.getDishes();
  }

  getDishes(): void {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

  modifyAvailability(dish: Dish): void {
    if (dish.isAvailable === true) {
      dish.isAvailable = false;
    } else {
      dish.isAvailable = true;
    }
    this.dishService.update(dish).subscribe();
  }

}
