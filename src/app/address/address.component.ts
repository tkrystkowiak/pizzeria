import { Component, OnInit } from '@angular/core';
import {Address} from '../models/Address';
import {CartService} from '../services/cart.service';
import {OrderService} from '../services/order.service';
import {Order} from '../models/Order';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

    model: Address;
    submitted = false;

  constructor(private cartService: CartService, private orderService: OrderService) {
    this.model = new Address();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    const order = new Order();
    order.address = this.model;
    order.date = Date.now();
    const dishes = [];
    this.cartService.getCart().forEach(dish => dishes.push(dish.id));
    order.dishes = dishes;
    this.orderService.save(order).subscribe();
  }

}
