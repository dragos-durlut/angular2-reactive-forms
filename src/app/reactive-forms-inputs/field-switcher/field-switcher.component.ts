import { Component, OnInit, Input } from '@angular/core';
import { FormFieldTypeEnum } from '../../shared/enums/form-field-type.enum';
import { BaseInputComponent } from '../classes/base-input.component';

@Component({
  selector: '[app-field-switcher]',
  templateUrl: './field-switcher.component.html',
  styleUrls: ['./field-switcher.component.scss']
})
export class FieldSwitcherComponent extends BaseInputComponent {

  public formFieldTypeEnum = FormFieldTypeEnum;

  constructor() {
    super()
  }

  ngOnInit() {
  }

}
