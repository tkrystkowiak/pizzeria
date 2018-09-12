import {Component, OnInit} from '@angular/core';
import {Order} from '../models/Order';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../services/order.service';
import {DishService} from '../services/dish.service';
import {Dish} from '../models/Dish';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order: Order;
  dishes: Dish[];

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private dishService: DishService) {
    this.dishes = [];
  }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOne(id)
      .subscribe(order => {
        this.order = order;
        this.getDishes();
      });
  }

  deleteOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.deleteOne(id)
      .subscribe();
  }

  getDishes(): void {
    this.order.dishes.forEach(dishId =>
      this.dishService.getDish(dishId).subscribe(dish => this.dishes.push(dish)));

  }
}

