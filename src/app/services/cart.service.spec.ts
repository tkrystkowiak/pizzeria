import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Dish} from '../models/Dish';
import {ArrayType} from '@angular/compiler';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService,
        HttpClient,
        HttpHandler]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));

  it('should return empty array of dishes', inject([CartService], (service: CartService) => {

    let actualCart: Dish[];
    // when
    actualCart = service.getCart();
    // then
    expect(actualCart.length).toEqual(0);
  }));

  it('should add one dish to the cart', inject([CartService], (service: CartService) => {
    const sampleDish: Dish = {
      id : 1,
      name : 'pizza',
      price: 15,
      type: 'pizza',
      description: 'tasty',
      isAvailable: true
    };
    let actualCart: Dish[];
    service.addToCart(sampleDish);
    actualCart = service.getCart();
    expect(actualCart.length).toEqual(1);
  }));

  it('should remove one dish from the cart', inject([CartService], (service: CartService) => {

    const sampleDish: Dish = {
      id : 1,
      name : 'pizza',
      price: 15,
      type: 'pizza',
      description: 'tasty',
      isAvailable: true
    };
    let actualCart: Dish[];
    service.addToCart(sampleDish);
    actualCart = service.getCart();
    const beforeRemoval = actualCart.length;
    service.remove(sampleDish);
    const afterRemoval = actualCart.length;
    expect(beforeRemoval).toEqual(afterRemoval+1);
  }));

});
