import { FormFieldUI } from '../classes/form-field-ui';
import { FormControl, ValidatorFn, AsyncValidatorFn, Validators } from '@angular/forms';
import { FormFieldTypeEnum } from '../../shared/enums/form-field-type.enum';

export class FormControlBuilder {
  static buildFormControl(formFieldUI: FormFieldUI): FormControl {
    
    let fieldValue: any;
    switch (formFieldUI.formField.formFieldType) {
      case FormFieldTypeEnum.CheckBox:
        fieldValue = formFieldUI.formField.value ? (formFieldUI.formField.value as boolean) : false;
        break;
      case FormFieldTypeEnum.DateTime:
        fieldValue = formFieldUI.formField.value ? (new Date(formFieldUI.formField.value)) : null;
        break;
      case FormFieldTypeEnum.Input:
      case FormFieldTypeEnum.TextArea:
      default:
        fieldValue = formFieldUI.formField.value;
        break;
    }
    let isDisabled = !formFieldUI.formField.isEnabled;
    let validatorsArray: ValidatorFn[] = new Array<ValidatorFn>();
    let asyncValidatorsArray: AsyncValidatorFn[] = new Array<AsyncValidatorFn>();

    let formControl = new FormControl({ value: fieldValue, disabled: isDisabled }, validatorsArray, asyncValidatorsArray);
    return formControl;
  }
}
