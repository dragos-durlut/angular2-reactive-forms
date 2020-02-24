import { FormField } from '../../shared/interfaces/form-field';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { FormSectionUI } from './form-section-ui';
export class FormFieldUI {
  public formField: FormField;
  public fieldDisplayId: string;

  public fieldFormControl: FormControl;
  public parentSectionFormGroup: FormGroup;
  public mainFormGroup: FormGroup;
  public parentFormSectionUI: FormSectionUI;

  public valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(formField: FormField) {
    this.formField = formField;
    this.fieldDisplayId = 'field' + this.formField.fieldId.toString();
  }

//#region FormControl functions

  get isDisabled(): boolean {
    return !this.isEnabled;
  }
  private setIsEnabled(isEnabled: boolean, emitEvent: boolean) {
    this.formField.isEnabled = isEnabled;
    if (isEnabled)
      this.fieldFormControl.enable({});
    else this.fieldFormControl.disable({});
    //https://stackoverflow.com/questions/43541897/valuechanges-on-formcontrol-triggers-when-form-enable-even-with-emitevent-fals
  }

  get isEnabled() {
    return this.formField.isEnabled;
  }

  get isInvalid() {
    return this.fieldFormControl.invalid;
  }

  get isValid() {
    return this.fieldFormControl.valid;
  }

  get isPristine() {
    return this.fieldFormControl.pristine;
  }

  public disableControl(emitEvent: boolean) {
    this.setIsEnabled(false, emitEvent);
    if (emitEvent) {
      this.valueChange.emit(false);
    }
  }

  public enableControl(emitEvent: boolean) {
    this.setIsEnabled(true, emitEvent);
    if (emitEvent) {
      this.valueChange.emit(true);
    }
  }

  public emptyControl(emitEvent: boolean = true, setValueToFormControl: boolean = true) {
    this.setValue(null, emitEvent);
  }

  public setValueAndDisplayValue(valueToSet: any, valueToDisplay: any = null, emitEvent: boolean = true, setValueToFormControl: boolean = true) {
    this.setValue(valueToSet, emitEvent, setValueToFormControl);
    this.formField.displayValue = valueToDisplay;
  }

  public setValue(valueToSet: any, emitEvent: boolean = true, setValueToFormControl: boolean = true) {
    this.formField.value = valueToSet;
    if (setValueToFormControl) {
      this.fieldFormControl.setValue(valueToSet, { emitEvent: emitEvent, onlySelf: !emitEvent });
    }
    if (emitEvent) {
      this.valueChange.emit(valueToSet);
    }
  }
//#endregion FormControl functions
}
