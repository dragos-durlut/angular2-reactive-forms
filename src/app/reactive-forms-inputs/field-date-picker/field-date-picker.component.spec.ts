import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDatePickerComponent } from './field-date-picker.component';

describe('FieldDatePickerComponent', () => {
  let component: FieldDatePickerComponent;
  let fixture: ComponentFixture<FieldDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
