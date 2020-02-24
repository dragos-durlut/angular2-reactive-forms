import { FormField } from '../../shared/interfaces/form-field';
import { FormFieldUI } from '../classes/form-field-ui';
import { FormControlBuilder } from './form-control-builder';

export class FormFieldUiBuilder {
  static fromFormFieldData(formField: FormField): FormFieldUI {
    let formFieldUI = new FormFieldUI(formField);
    formFieldUI.FieldFormControl = FormControlBuilder.buildFormControl(formFieldUI);
    return formFieldUI;
  }
}
