import { Component } from '@angular/core';
import { FormSchemaUI } from './shared/classes/form-schema-ui';
import { FormSectionUI } from './shared/classes/form-section-ui';
import { FormFieldUI } from './shared/classes/form-field-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms';

  public formSchemaUI: FormSchemaUI;
  loading: boolean;
  saving: boolean;

  public fieldsToUpdate: any = {};


  constructor() {
    this.loading = true;
  }

  public saveFieldData = () => {

    this.formSchemaUI.sectionsUI.forEach(function (sectionUI: FormSectionUI) {
      sectionUI.fieldsUI.forEach(function (fieldUI: FormFieldUI) {
        if (fieldUI.fieldFormControl.dirty) {
          this.fieldsToUpdate[fieldUI.formField.fieldId] = fieldUI.formField.value;
        }
      });
    });
    
      console.info("Fields were updated!");
    //TODO: update some <pre> tag
  }

}
