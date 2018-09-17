import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaMenuComponent } from './pasta-menu.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {DishService} from '../services/dish.service';
import {CartService} from '../services/cart.service';

describe('PastaMenuComponent', () => {
  let component: PastaMenuComponent;
  let fixture: ComponentFixture<PastaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaMenuComponent ],
      providers: [ HttpClient,
      HttpHandler,
      CartService,
      DishService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dishService', () => {
    const dishService = TestBed.get(DishService);
    const spyDishService = spyOn(dishService, 'getPastas');
    spyDishService.and.returnValue(null);
    component.ngOnInit();
    expect(spyDishService).toHaveBeenCalled();
  });

  it('should call addToCart', () => {
    const cartService = TestBed.get(CartService);
    const spyCartService = spyOn(cartService, 'addToCart');
    component.addToCart(null);
    expect(spyCartService).toHaveBeenCalled();
  });
});
