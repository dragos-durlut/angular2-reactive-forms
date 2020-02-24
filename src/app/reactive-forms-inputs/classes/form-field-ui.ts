import { FormField } from '../../shared/interfaces/form-field';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
export class FormFieldUI {
  public formField: FormField;
  public FieldDisplayId: string;

  public FieldFormControl: FormControl;
  public ParentSectionFormGroup: FormGroup;
  public MainFormGroup: FormGroup;

  public ValueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(formField: FormField) {
    this.formField = formField;
  }

//#region FormControl functions

  get isDisabled(): boolean {
    return !this.isEnabled;
  }
  private setIsEnabled(isEnabled: boolean, emitEvent: boolean) {
    this.formField.IsEnabled = isEnabled;
    if (isEnabled)
      this.FieldFormControl.enable({});
    else this.FieldFormControl.disable({});
    //https://stackoverflow.com/questions/43541897/valuechanges-on-formcontrol-triggers-when-form-enable-even-with-emitevent-fals
  }

  get isEnabled() {
    return this.formField.IsEnabled;
  }

  get isInvalid() {
    return this.FieldFormControl.invalid;
  }

  get isValid() {
    return this.FieldFormControl.valid;
  }

  get isPristine() {
    return this.FieldFormControl.pristine;
  }

  public disableControl(emitEvent: boolean) {
    this.setIsEnabled(false, emitEvent);
    if (emitEvent) {
      this.ValueChange.emit(false);
    }
  }

  public enableControl(emitEvent: boolean) {
    this.setIsEnabled(true, emitEvent);
    if (emitEvent) {
      this.ValueChange.emit(true);
    }
  }

  public emptyControl(emitEvent: boolean = true, setValueToFormControl: boolean = true) {
    this.setValue(null, emitEvent);
  }

  public setValueAndDisplayValue(valueToSet: any, valueToDisplay: any = null, emitEvent: boolean = true, setValueToFormControl: boolean = true) {
    this.setValue(valueToSet, emitEvent, setValueToFormControl);
    this.formField.DisplayValue = valueToDisplay;
  }

  public setValue(valueToSet: any, emitEvent: boolean = true, setValueToFormControl: boolean = true) {
    this.formField.Value = valueToSet;
    if (setValueToFormControl) {
      this.FieldFormControl.setValue(valueToSet, { emitEvent: emitEvent, onlySelf: !emitEvent });
    }
    if (emitEvent) {
      this.ValueChange.emit(valueToSet);
    }
  }
//#endregion FormControl functions
}
