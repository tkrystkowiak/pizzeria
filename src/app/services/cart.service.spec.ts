import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

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

});
