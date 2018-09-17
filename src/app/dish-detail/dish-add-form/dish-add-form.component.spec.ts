import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishAddFormComponent } from './dish-add-form.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DishAddFormComponent', () => {
  let component: DishAddFormComponent;
  let fixture: ComponentFixture<DishAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule,
        HttpClientTestingModule],
      declarations: [ DishAddFormComponent ]
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

});
