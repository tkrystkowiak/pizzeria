import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('AddressComponent', () => {
  let component: AddressComponent;
  let fixture: ComponentFixture<AddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule],
      declarations: [ AddressComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
