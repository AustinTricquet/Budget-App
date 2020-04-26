import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekMonthToggleComponent } from './week-month-toggle.component';

describe('WeekMonthToggleComponent', () => {
  let component: WeekMonthToggleComponent;
  let fixture: ComponentFixture<WeekMonthToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekMonthToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekMonthToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
