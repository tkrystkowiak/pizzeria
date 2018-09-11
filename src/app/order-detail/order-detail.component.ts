import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../Order';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order: Order;

  constructor(  private route: ActivatedRoute,
                private orderService: OrderService) { }

  ngOnInit() {
    this.getOrder();
  }

  getOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.getOne(id)
      .subscribe(order => this.order = order);
  }

  deleteOrder(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.orderService.deleteOne(id)
      .subscribe();
  }

}
