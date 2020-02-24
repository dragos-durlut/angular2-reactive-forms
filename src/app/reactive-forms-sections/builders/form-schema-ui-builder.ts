import { FormSchema } from '../../shared/interfaces/form-schema';

import { FormSectionUiBuilder } from './form-section-ui-builder';
import { MainFormGroupBuilder } from './main-form-group-builder';
import { FormSchemaUI } from '../../shared/classes/form-schema-ui';
import { FormSectionUI } from '../../shared/classes/form-section-ui';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormSchemaUiBuilder {

  constructor(public formSectionUiBuilder: FormSectionUiBuilder, public mainFormGroupBuilder: MainFormGroupBuilder) {

  }

  public fromFormSchemaData(formSchema: FormSchema): FormSchemaUI {
    let formSchemaUI = new FormSchemaUI(formSchema);
    formSchemaUI.sectionsUI = new Array<FormSectionUI>();
    formSchemaUI.formSchema.sections.forEach(section => {
      let formSectionUI = this.formSectionUiBuilder.fromFormSectionData(section);

      formSchemaUI.sectionsUI.push(formSectionUI);
    });
    formSchemaUI.mainFormGroup = this.mainFormGroupBuilder.buildMainFormGroup(formSchemaUI);

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
