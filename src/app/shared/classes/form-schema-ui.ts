import { FormSchema } from '../../shared/interfaces/form-schema';
import { FormSectionUI } from './form-section-ui';
import { FormGroup } from '@angular/forms';

export class FormSchemaUI {
  public formSchema: FormSchema;

  public sectionsUI: Array<FormSectionUI>;
  public mainFormGroup: FormGroup;

  constructor(formSchema: FormSchema) {
    this.formSchema = formSchema;
  }
}
