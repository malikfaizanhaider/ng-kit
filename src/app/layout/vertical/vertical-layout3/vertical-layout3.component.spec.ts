import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalLayout3Component } from './vertical-layout3.component';

describe('VerticalLayout3Component', () => {
  let component: VerticalLayout3Component;
  let fixture: ComponentFixture<VerticalLayout3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalLayout3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalLayout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
