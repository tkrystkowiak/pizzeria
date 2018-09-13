import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksMenuComponent } from './drinks-menu.component';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('DrinksMenuComponent', () => {
  let component: DrinksMenuComponent;
  let fixture: ComponentFixture<DrinksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksMenuComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
