import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemainderComponent } from './edit-remainder.component';

describe('EditRemainderComponent', () => {
  let component: EditRemainderComponent;
  let fixture: ComponentFixture<EditRemainderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRemainderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRemainderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
