import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeOptionsComponent } from './theme-options.component';

describe('ThemeOptionsComponent', () => {
  let component: ThemeOptionsComponent;
  let fixture: ComponentFixture<ThemeOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
