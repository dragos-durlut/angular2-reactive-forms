import { FormField } from '../../shared/interfaces/form-field';
import { FormControlBuilder } from './form-control-builder';
import { FormFieldUI } from '../../shared/classes/form-field-ui';

export class FormFieldUiBuilder {
  static fromFormFieldData(formField: FormField): FormFieldUI {
    let formFieldUI = new FormFieldUI(formField);
    formFieldUI.fieldFormControl = FormControlBuilder.buildFormControl(formFieldUI);
    return formFieldUI;
  }
}
