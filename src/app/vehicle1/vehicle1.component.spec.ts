import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehicle1Component } from './vehicle1.component';

describe('Vehicle1Component', () => {
  let component: Vehicle1Component;
  let fixture: ComponentFixture<Vehicle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vehicle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vehicle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
