import { Component, OnInit } from '@angular/core';
import {Address} from '../Address';
import {CartService} from '../cart.service';
import {OrderService} from '../order.service';
import {Order} from '../Order';

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
    let order = new Order();
    order.address = this.model;
    let dishes = [];
    this.cartService.getCart().forEach(dish => dishes.push(dish.id));
    order.dishes = dishes;
    this.orderService.save(order).subscribe();
  }

}
