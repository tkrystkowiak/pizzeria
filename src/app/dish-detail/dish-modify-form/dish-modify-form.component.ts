import {Component, OnDestroy, OnInit} from '@angular/core';
import {Dish} from '../../models/Dish';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {DishService} from '../../services/dish.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-dish-modify-form',
  templateUrl: './dish-modify-form.component.html',
  styleUrls: ['./dish-modify-form.component.scss']
})
export class DishModifyFormComponent implements OnInit, OnDestroy {

  model: Dish;
  submitted = false;
  private readonly destroy$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService
  ) {
    this.model = new Dish();
  }

  ngOnInit() {
    this.getDish();
  }

  getDish(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dishService.getDish(id).pipe(takeUntil(this.destroy$))
      .subscribe(dish => this.model = dish);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    this.submitted = true;
    this.model.isAvailable = true;
    this.dishService.update(this.model).pipe(takeUntil(this.destroy$)).subscribe();
  }

}
