import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalLayout1Component } from './vertical-layout1.component';

describe('VerticalLayout1Component', () => {
  let component: VerticalLayout1Component;
  let fixture: ComponentFixture<VerticalLayout1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalLayout1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
