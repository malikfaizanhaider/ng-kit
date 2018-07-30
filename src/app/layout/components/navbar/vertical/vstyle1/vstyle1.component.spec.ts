import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vstyle1Component } from './vstyle1.component';

describe('Vstyle1Component', () => {
  let component: Vstyle1Component;
  let fixture: ComponentFixture<Vstyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vstyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vstyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
