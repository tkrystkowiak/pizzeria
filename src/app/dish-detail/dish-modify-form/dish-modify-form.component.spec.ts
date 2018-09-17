import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishModifyFormComponent } from './dish-modify-form.component';

describe('DishModifyFormComponent', () => {
  let component: DishModifyFormComponent;
  let fixture: ComponentFixture<DishModifyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
