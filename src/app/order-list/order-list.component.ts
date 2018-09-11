import { Component, OnInit } from '@angular/core';
import {Order} from '../Order';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Order[];

  constructor(private orderService: OrderService) {}


  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getAll().subscribe(orders => this.orders = orders);
  }

}