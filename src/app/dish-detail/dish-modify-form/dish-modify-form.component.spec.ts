import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishModifyFormComponent } from './dish-modify-form.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {DishService} from '../../services/dish.service';
import {of} from 'rxjs';

describe('DishModifyFormComponent', () => {
  let component: DishModifyFormComponent;
  let fixture: ComponentFixture<DishModifyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        HttpClientTestingModule,
        RouterTestingModule],
      declarations: [ DishModifyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishModifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change submitted to true nd call dishService', () => {
    const dishService = TestBed.get(DishService);
    const spyDishService = spyOn(dishService, 'update');
    spyDishService.and.returnValue(of(null));
    component.onSubmit()
    expect(spyDishService).toHaveBeenCalled();
    expect(component.submitted).toEqual(true);
  });
});
