import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontelLayout1Component } from './horizontel-layout1.component';

describe('HorizontelLayout1Component', () => {
  let component: HorizontelLayout1Component;
  let fixture: ComponentFixture<HorizontelLayout1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontelLayout1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontelLayout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
