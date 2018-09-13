import {TestBed, inject} from '@angular/core/testing';

import {DishService} from './dish.service';
import {Dish} from '../models/Dish';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('DishService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let dishService: DishService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    dishService = new DishService(<any> httpClientSpy);
    TestBed.configureTestingModule({
      providers: [DishService,
      HttpClient,
      HttpHandler]
    });
  });

  it('should be created', inject([DishService], (service: DishService) => {
    expect(service).toBeTruthy();
  }));

  /*it('it should return observable dishes with type pizza', () => {
    const expectedPizzas: Dish[] =
      [{
        'id': 1,
        'name': 'Pizza Margherita',
        'isAvailable': true,
        'description': 'Sos, ser',
        'type': 'pizza',
        'price': 22
      },
        {
          'id': 2,
          'name': 'Pizza Funghi',
          'isAvailable': true,
          'description': 'Sos, ser, pieczarki',
          'type': 'pizza',
          'price': 23.50
        }];
    httpClientSpy.get.and.returnValue(expectedPizzas);
    dishService.getPizzas().subscribe(
      pizzas => expect(pizzas).toEqual(expectedPizzas, 'expected pizzas'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });*/

  /*it('it should return observable dishes with type pasta', () => {
    const expectedPastas: Dish[] =
      [{
        'id': 3,
        'name': 'Spagetti Carbonara',
        'isAvailable': true,
        'description': 'Sos carbonara',
        'type': 'pasta',
        'price': 14
      },
        {
          'id': 4,
          'name': 'Spagetti Bolognese',
          'isAvailable': true,
          'description': 'Sos boloński',
          'type': 'pasta',
          'price': 14
        }];
    httpClientSpy.get.and.returnValue(expectedPastas);
    dishService.getPastas().subscribe(
      pastas => expect(pastas).toEqual(expectedPastas, 'expected pastas'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });*/
});
