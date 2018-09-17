import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../models/Dish';
import {Subject} from 'rxjs';
import {Order} from '../models/Order';
import {takeUntil} from 'rxjs/operators';
import {DishService} from '../services/dish.service';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.scss']
})
export class DishFormComponent implements OnInit, OnDestroy {

  model: Dish;
  submitted = false;
  private readonly destroy$ = new Subject();

  constructor(private dishService: DishService) {
    this.model = new Dish();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.model.isAvailable = false;
    this.dishService.save(this.model).pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
