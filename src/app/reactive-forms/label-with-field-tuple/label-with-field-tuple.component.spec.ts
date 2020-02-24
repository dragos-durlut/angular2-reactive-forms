import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelWithFieldTupleComponent } from './label-with-field-tuple.component';

describe('LabelWithFieldTupleComponent', () => {
  let component: LabelWithFieldTupleComponent;
  let fixture: ComponentFixture<LabelWithFieldTupleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelWithFieldTupleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelWithFieldTupleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
