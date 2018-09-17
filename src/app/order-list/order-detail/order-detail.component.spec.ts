import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailComponent } from './order-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {OrderService} from '../../services/order.service';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {Order} from '../../models/Order';

describe('OrderDetailComponent', () => {
  let component: OrderDetailComponent;
  let fixture: ComponentFixture<OrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
      HttpClientTestingModule,
      FormsModule],
      declarations: [ OrderDetailComponent ],
      providers: [OrderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call orderService getOne method', () => {
    const sampleOrder: Order = {
      'address': {
        'firstName': 'Albert',
        'lastName': 'Jones',
        'city': 'Atlanta',
        'street': 'Baker Street',
        'apartment': '39',
        'floor': '4'
      },
      'date': 1536915787076,
      'dishes': [
        3,
        4,
        5
      ],
      'status': 'In preparation',
      'id': 1
    };
    const orderService = TestBed.get(OrderService);
    const spyOrderService = spyOn(orderService, 'getOne');
    spyOrderService.and.returnValue(of(sampleOrder));
    component.ngOnInit();
    expect(spyOrderService).toHaveBeenCalled();
  });

  it('should call orderService delete method', () => {
    const orderService = TestBed.get(OrderService);
    const spyOrderService = spyOn(orderService, 'deleteOne');
    spyOrderService.and.returnValue(of(null));
    component.deleteOrder();
    expect(spyOrderService).toHaveBeenCalled();
  });

  it('should call orderService update method', () => {
    const orderService = TestBed.get(OrderService);
    const spyOrderService = spyOn(orderService, 'updateOne');
    spyOrderService.and.returnValue(of(null));
    component.updateOrder();
    expect(spyOrderService).toHaveBeenCalled();
  });

});
