import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishListComponent } from './dish-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {DishService} from '../services/dish.service';
import {Dish} from '../models/Dish';
import {of} from 'rxjs';

describe('DishListComponent', () => {
  let component: DishListComponent;
  let fixture: ComponentFixture<DishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ DishListComponent],
      providers: [ DishService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should modify availability and call dishService update', () => {
    const sampleDish: Dish = {
      id : 1,
      name : 'pizza',
      price: 15,
      type: 'pizza',
      description: 'tasty',
      isAvailable: false
    };
    const dishService = TestBed.get(DishService);
    const spyDishService = spyOn(dishService, 'update');
    spyDishService.and.returnValue(of(sampleDish));
    component.modifyAvailability(sampleDish);
    expect(sampleDish.isAvailable).toEqual(true);
  });
});
