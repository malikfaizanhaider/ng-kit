import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalLayout2Component } from './vertical-layout2.component';

describe('VerticalLayout2Component', () => {
  let component: VerticalLayout2Component;
  let fixture: ComponentFixture<VerticalLayout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalLayout2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
