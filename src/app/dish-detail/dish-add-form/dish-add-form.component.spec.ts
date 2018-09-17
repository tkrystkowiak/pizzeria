import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishAddFormComponent } from './dish-add-form.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Dish} from '../../models/Dish';
import {DishService} from '../../services/dish.service';
import {of} from 'rxjs';

describe('DishAddFormComponent', () => {
  let component: DishAddFormComponent;
  let fixture: ComponentFixture<DishAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        HttpClientTestingModule],
      declarations: [ DishAddFormComponent ],
      providers: [DishService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change submitted to true nd call dishService', () => {
    const dishService = TestBed.get(DishService);
    const spyDishService = spyOn(dishService, 'save');
    spyDishService.and.returnValue(of(null));
    component.onSubmit()
    expect(spyDishService).toHaveBeenCalled();
    expect(component.submitted).toEqual(true);
  });

});
