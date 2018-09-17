import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../models/Order';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../services/order.service';
import {DishService} from '../services/dish.service';
import {Dish} from '../models/Dish';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})

export class OrderDetailComponent implements OnInit, OnDestroy {

  order: Order;
  dishes: Dish[];
  statusList: string[];
  private readonly destroy$ = new Subject();

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private dishService: DishService) {
    this.dishes = [];
  }

  ngOnInit() {
    this.getOrder();
    this.statusList = this.orderService.getStatusList();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOne(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(order => {
        this.order = order;
        this.getDishes();
      });
  }

  deleteOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.deleteOne(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  getDishes(): void {
    this.order.dishes.forEach(dishId =>
      this.dishService.getDish(dishId)
        .pipe(takeUntil(this.destroy$))
        .subscribe(dish => this.dishes.push(dish)));
  }

  updateOrder(): void {
    this.orderService.updateOne(this.order)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}

