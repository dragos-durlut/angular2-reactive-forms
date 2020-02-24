import { FormSection } from '../../shared/interfaces/form-section';
import { FormGroup } from '@angular/forms';
import { FormSchemaUI } from './form-schema-ui';
import { FormFieldUI } from './form-field-ui';

export class FormSectionUI {

  public formSection: FormSection;

  public sectionDisplayId: string;
  public fieldsUI: Array<FormFieldUI>;  
  public sectionFormGroup: FormGroup;
  public mainFormGroup: FormGroup;
  public parentFormSchemaUI: FormSchemaUI;

  constructor(formSection: FormSection) {
    this.formSection = formSection;
    this.sectionDisplayId = 'section' + this.formSection.sectionId.toString();
  }
}
