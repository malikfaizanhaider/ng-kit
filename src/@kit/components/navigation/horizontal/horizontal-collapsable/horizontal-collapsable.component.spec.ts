import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCollapsableComponent } from './horizontal-collapsable.component';

describe('HorizontalCollapsableComponent', () => {
  let component: HorizontalCollapsableComponent;
  let fixture: ComponentFixture<HorizontalCollapsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalCollapsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
