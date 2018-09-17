import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMenuComponent } from './pizza-menu.component';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {DishService} from '../services/dish.service';
import {Dish} from '../models/Dish';
import {of} from 'rxjs';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CartService} from '../services/cart.service';

describe('PizzaMenuComponent', () => {
  let component: PizzaMenuComponent;
  let fixture: ComponentFixture<PizzaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ PizzaMenuComponent],
      providers: [DishService,
      CartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const emptyDishes: Dish[] = [{
      id : 1,
      name : 'pizza',
      price: 15,
      type: 'pizza',
      description: 'tasty',
      isAvailable: true
    }];

    const dishService = TestBed.get(DishService);
    spyOn(dishService, 'getPizzas').and.returnValue(of(emptyDishes));
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should call dishService', () => {
    const dishService = TestBed.get(DishService);
    const spyDishService = spyOn(dishService, 'getPizzas');
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
