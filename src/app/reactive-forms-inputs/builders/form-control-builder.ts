import { FormFieldUI } from '../classes/form-field-ui';
import { FormControl, ValidatorFn, AsyncValidatorFn, Validators } from '@angular/forms';
import { FormFieldTypeEnum } from '../../shared/enums/form-field-type.enum';

export class FormControlBuilder {
  static buildFormControl(formFieldUI: FormFieldUI): FormControl {
    
    let fieldValue: any;
    switch (formFieldUI.formField.FormFieldType) {
      case FormFieldTypeEnum.CheckBox:
        fieldValue = formFieldUI.formField.Value ? (formFieldUI.formField.Value as boolean) : false;
        break;
      case FormFieldTypeEnum.DateTime:
        fieldValue = formFieldUI.formField.Value ? (new Date(formFieldUI.formField.Value)) : null;
        break;
      case FormFieldTypeEnum.Input:
      case FormFieldTypeEnum.TextArea:
      default:
        fieldValue = formFieldUI.formField.Value;
        break;
    }
    let isDisabled = !formFieldUI.formField.IsEnabled;
    let validatorsArray: ValidatorFn[] = new Array<ValidatorFn>();
    let asyncValidatorsArray: AsyncValidatorFn[] = new Array<AsyncValidatorFn>();

    let formControl = new FormControl({ value: fieldValue, disabled: isDisabled }, validatorsArray, asyncValidatorsArray);
    return formControl;
  }
}
