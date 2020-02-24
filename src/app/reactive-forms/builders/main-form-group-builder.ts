
import { FormGroup } from '@angular/forms';
import { FormSchemaUI } from '../../shared/classes/form-schema-ui';

export class MainFormGroupBuilder {
  public static buildMainFormGroup(formSchemaUI: FormSchemaUI): FormGroup {
    let obj = {};
    formSchemaUI.sectionsUI.forEach(sectionUI => {
      obj[sectionUI.sectionDisplayId] = sectionUI.sectionFormGroup;
    });
    let sectionFormGroup = new FormGroup(obj);
    return sectionFormGroup;
  }
}
