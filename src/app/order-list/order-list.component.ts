import {Component, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../models/Order';
import {OrderService} from '../services/order.service';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, OnDestroy {

  orders: Order[];
  interval: any;
  private readonly destroy$ = new Subject();

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getOrders();
    this.interval = setInterval(() => {
      this.getOrders();
    }, 20000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    clearInterval(this.interval);
  }

  getOrders() {
    this.orderService.getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe(orders => this.orders = orders);
  }

}
