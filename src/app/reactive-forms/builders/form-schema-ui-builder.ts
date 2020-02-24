import { FormSchema } from '../../shared/interfaces/form-schema';

import { FormSectionUiBuilder } from './form-section-ui-builder';
import { MainFormGroupBuilder } from './main-form-group-builder';
import { FormSchemaUI } from '../../shared/classes/form-schema-ui';
import { FormSectionUI } from '../../shared/classes/form-section-ui';

export class FormSchemaUiBuilder {
  static fromFormSchemaData(formSchema: FormSchema): FormSchemaUI {
    let formSchemaUI = new FormSchemaUI(formSchema);
    formSchemaUI.sectionsUI = new Array<FormSectionUI>();
    formSchemaUI.formSchema.Sections.forEach(section => {
      let formSectionUI = FormSectionUiBuilder.fromFormSectionData(section);

      formSchemaUI.sectionsUI.push(formSectionUI);
    });
    formSchemaUI.mainFormGroup = MainFormGroupBuilder.buildMainFormGroup(formSchemaUI);

    formSchemaUI.sectionsUI.forEach(sectionUI => {
      sectionUI.mainFormGroup = formSchemaUI.mainFormGroup;
      sectionUI.parentFormSchemaUI = formSchemaUI;
      sectionUI.fieldsUI.forEach(fieldUI => {
        fieldUI.parentSectionFormGroup = sectionUI.sectionFormGroup;
        fieldUI.mainFormGroup = sectionUI.mainFormGroup;
        fieldUI.parentFormSectionUI = sectionUI;
      });
      
    });

    return formSchemaUI;
  }
}