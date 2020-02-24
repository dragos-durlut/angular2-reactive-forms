import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldSwitcherComponent } from './field-switcher.component';

describe('FieldSwitcherComponent', () => {
  let component: FieldSwitcherComponent;
  let fixture: ComponentFixture<FieldSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
