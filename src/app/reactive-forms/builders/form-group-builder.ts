
import { FormGroup } from '@angular/forms';
import { FormSectionUI } from '../../shared/classes/form-section-ui';

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
