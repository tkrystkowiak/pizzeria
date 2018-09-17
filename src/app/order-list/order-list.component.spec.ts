import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponent } from './order-list.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {DishService} from '../services/dish.service';
import {OrderService} from '../services/order.service';
import {of} from 'rxjs';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ OrderListComponent ],
      providers: [ HttpClient,
        HttpHandler,
        OrderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call orderService', () => {
    const orderService = TestBed.get(OrderService);
    const spyOrderService = spyOn(orderService, 'getAll');
    spyOrderService.and.returnValue(of(null));
    component.ngOnInit();
    expect(spyOrderService).toHaveBeenCalled();
  });

});
