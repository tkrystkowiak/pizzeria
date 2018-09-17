import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailComponent } from './order-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {OrderService} from '../services/order.service';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

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

  it('should call orderService getOrder method', () => {
    const orderService = TestBed.get(OrderService);
    const spyOrderService = spyOn(orderService, 'getOne');
    spyOrderService.and.returnValue(of(null));
    component.ngOnInit();
    expect(spyOrderService).toHaveBeenCalled();
  });
});
