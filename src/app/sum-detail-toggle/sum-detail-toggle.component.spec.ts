import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumDetailToggleComponent } from './sum-detail-toggle.component';

describe('SumDetailToggleComponent', () => {
  let component: SumDetailToggleComponent;
  let fixture: ComponentFixture<SumDetailToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumDetailToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumDetailToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
