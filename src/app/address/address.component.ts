import {Component, OnDestroy, OnInit} from '@angular/core';
import {Address} from '../models/Address';
import {CartService} from '../services/cart.service';
import {OrderService} from '../services/order.service';
import {Order} from '../models/Order';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})

export class AddressComponent implements OnInit, OnDestroy {

    model: Address;
    submitted = false;
    private readonly destroy$ = new Subject();


  constructor(private cartService: CartService, private orderService: OrderService) {
    this.model = new Address();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    const order = new Order();
    const dishes = [];
    this.cartService.getCart().forEach(dish => dishes.push(dish.id));
    order.address = this.model;
    order.date = Date.now();
    order.dishes = dishes;
    order.status = 'In preparation';
    this.orderService.save(order).pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
