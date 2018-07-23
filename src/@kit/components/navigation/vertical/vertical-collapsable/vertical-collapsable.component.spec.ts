import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCollapsableComponent } from './vertical-collapsable.component';

describe('VerticalCollapsableComponent', () => {
  let component: VerticalCollapsableComponent;
  let fixture: ComponentFixture<VerticalCollapsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCollapsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
