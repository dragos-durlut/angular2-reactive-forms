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
}
