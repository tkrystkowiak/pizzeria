import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../models/Dish';
import {DishService} from '../services/dish.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit, OnDestroy {

  dishes: Dish[];
  private readonly destroy$ = new Subject();

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.getDishes();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
    this.dishService.update(dish).pipe(takeUntil(this.destroy$)).subscribe();
  }

}
