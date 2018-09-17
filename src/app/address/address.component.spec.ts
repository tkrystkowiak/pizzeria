import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {OrderService} from '../services/order.service';
import {of} from 'rxjs';


describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
      HttpClientTestingModule],
      declarations: [ AddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change submitted to true and call save on orderService', () => {
    const orderService = TestBed.get(OrderService);
    const spyOrderService = spyOn(orderService, 'save');
    spyOrderService.and.returnValue(of(null));
    component.ngOnInit();
    component.onSubmit();
    expect(spyOrderService).toHaveBeenCalled();
    expect(component.submitted).toEqual(true);
  });
});
