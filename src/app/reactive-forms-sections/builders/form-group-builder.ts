
import { FormGroup } from '@angular/forms';
import { FormSectionUI } from '../../shared/classes/form-section-ui';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormGroupBuilder {
  public buildFormSectionFormGroup(formSectionUI: FormSectionUI): FormGroup {
    let obj = {};
    formSectionUI.fieldsUI.forEach(fieldUI => {
      obj[fieldUI.fieldDisplayId] = fieldUI.fieldFormControl;
    });
    let sectionFormGroup = new FormGroup(obj);
    return sectionFormGroup;
  }
}
