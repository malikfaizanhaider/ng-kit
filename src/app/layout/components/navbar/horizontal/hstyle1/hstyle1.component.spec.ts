import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hstyle1Component } from './hstyle1.component';

describe('Hstyle1Component', () => {
  let component: Hstyle1Component;
  let fixture: ComponentFixture<Hstyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hstyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hstyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
