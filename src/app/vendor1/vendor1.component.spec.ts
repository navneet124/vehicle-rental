import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vendor1Component } from './vendor1.component';

describe('Vendor1Component', () => {
  let component: Vendor1Component;
  let fixture: ComponentFixture<Vendor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vendor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vendor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
