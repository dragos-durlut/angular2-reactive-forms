import { Component, OnInit } from '@angular/core';
import { BaseInputComponent } from '../classes/base-input.component';

@Component({
  selector: 'app-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  styleUrls: ['./field-checkbox.component.scss']
})
export class FieldCheckboxComponent extends BaseInputComponent {

  get isChecked(): boolean {
    return this.fieldUI.formField.value as boolean;
  }

  set isChecked(checked: boolean) {
    this.fieldUI.formField.value = checked;
  }

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
