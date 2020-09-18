import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehicle2Component } from './vehicle2.component';

describe('Vehicle2Component', () => {
  let component: Vehicle2Component;
  let fixture: ComponentFixture<Vehicle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vehicle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vehicle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
