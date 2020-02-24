import { Component, OnInit } from '@angular/core';
import { BaseInputComponent } from '../classes/base-input.component';

@Component({
  selector: 'app-field-date-picker',
  templateUrl: './field-date-picker.component.html',
  styleUrls: ['./field-date-picker.component.scss']
})
export class FieldDatePickerComponent extends BaseInputComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
