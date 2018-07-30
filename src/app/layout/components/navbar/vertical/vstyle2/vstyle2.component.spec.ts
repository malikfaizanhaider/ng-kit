import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vstyle2Component } from './vstyle2.component';

describe('Vstyle2Component', () => {
  let component: Vstyle2Component;
  let fixture: ComponentFixture<Vstyle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vstyle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vstyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
