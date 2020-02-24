import { FormSectionUI } from '../classes/form-section-ui';
import { FormGroup } from '@angular/forms';

export class FormGroupBuilder {
  static buildFormSectionFormGroup(formSectionUI: FormSectionUI): FormGroup {
    let obj = {};
    formSectionUI.fieldsUI.forEach(fieldUI => {
      obj[fieldUI.fieldDisplayId] = fieldUI.fieldFormControl;
    });
    let sectionFormGroup = new FormGroup(obj);
    return sectionFormGroup;
  }
}
