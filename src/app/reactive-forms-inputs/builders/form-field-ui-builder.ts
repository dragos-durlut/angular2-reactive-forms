import { FormField } from '../../shared/interfaces/form-field';
import { FormControlBuilder } from './form-control-builder';
import { FormFieldUI } from '../../shared/classes/form-field-ui';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormFieldUiBuilder {

  constructor(public formControlBuilder: FormControlBuilder) {

  }

  public fromFormFieldData(formField: FormField): FormFieldUI {
    let formFieldUI = new FormFieldUI(formField);
    formFieldUI.fieldFormControl = this.formControlBuilder.buildFormControl(formFieldUI);
    return formFieldUI;
  }
}
