import { FormSection } from '../../shared/interfaces/form-section';
import { FormSectionUI } from '../classes/form-section-ui';
import { FormFieldUI } from '../../reactive-forms-inputs/classes/form-field-ui';
import { FormGroupBuilder } from './form-group-builder';
import { FormFieldUiBuilder } from '../../reactive-forms-inputs/builders/form-field-ui-builder';

export class FormSectionUiBuilder {
  static fromFormSectionData(formSection: FormSection): FormSectionUI {
    let formSectionUI = new FormSectionUI(formSection);
    formSectionUI.fieldsUI = new Array<FormFieldUI>();
    formSectionUI.formSection.fields.forEach(field => {
      let fieldUI = FormFieldUiBuilder.fromFormFieldData(field);
      
      formSectionUI.fieldsUI.push(fieldUI);
      
    });
    formSectionUI.sectionFormGroup = FormGroupBuilder.buildFormSectionFormGroup(formSectionUI);
    return formSectionUI;
  }
}
