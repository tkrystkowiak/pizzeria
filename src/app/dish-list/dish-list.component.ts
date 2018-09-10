import { Component, OnInit } from '@angular/core';
import {Dish} from '../Dish';
import {DishService} from '../dish.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  dishes: Dish[];

  selectedDish : Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.getDishes();
  }

  onSelect(dish: Dish): void {
    this.selectedDish = dish;
  }

  getDishes(): void {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }

}
