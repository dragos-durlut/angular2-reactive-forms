import { FormSection } from '../../shared/interfaces/form-section';

import { FormGroupBuilder } from './form-group-builder';
import { FormFieldUiBuilder } from '../../reactive-forms-inputs/builders/form-field-ui-builder';
import { FormFieldUI } from '../../shared/classes/form-field-ui';
import { FormSectionUI } from '../../shared/classes/form-section-ui';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormSectionUiBuilder {

  constructor(public formFieldUiBuilder: FormFieldUiBuilder, public formGroupBuilder: FormGroupBuilder) {

  }

  public fromFormSectionData(formSection: FormSection): FormSectionUI {
    let formSectionUI = new FormSectionUI(formSection);
    formSectionUI.fieldsUI = new Array<FormFieldUI>();
    formSectionUI.formSection.fields.forEach(field => {
      let fieldUI = this.formFieldUiBuilder.fromFormFieldData(field);
      
      formSectionUI.fieldsUI.push(fieldUI);
      
    });
    formSectionUI.sectionFormGroup = this.formGroupBuilder.buildFormSectionFormGroup(formSectionUI);
    return formSectionUI;
  }
}
