import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaMenuComponent } from './pasta-menu.component';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('PastaMenuComponent', () => {
  let component: PastaMenuComponent;
  let fixture: ComponentFixture<PastaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastaMenuComponent ],
      providers: [ HttpClient,
      HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
