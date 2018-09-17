import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';

import { DrinksMenuComponent } from './drinks-menu.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {DishService} from '../services/dish.service';
import {of} from 'rxjs';

describe('DrinksMenuComponent', () => {
  let component: DrinksMenuComponent;
  let fixture: ComponentFixture<DrinksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksMenuComponent ],
      providers: [HttpClient, HttpHandler, DishService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const dishService = TestBed.get(DishService);
    spyOn(dishService, 'getDrinks').and.returnValue(of(null));
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
});
