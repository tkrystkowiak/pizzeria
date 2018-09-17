import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../models/Dish';
import {DishService} from '../services/dish.service';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit, OnDestroy {

  dish: Dish;
  deleted = false;
  private readonly destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService
  ) {}

  ngOnInit() {
    this.getDish();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getDish(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dishService.getDish(id).pipe(takeUntil(this.destroy$))
      .subscribe(dish => this.dish = dish);
  }

  deleteDish(id: number) {
    this.deleted = true;
    this.dishService.deleteOne(id).pipe(takeUntil(this.destroy$)).subscribe();
  }

}
