import { Component } from '@angular/core';
import { FormSchemaUI } from './shared/classes/form-schema-ui';
import { FormSectionUI } from './shared/classes/form-section-ui';
import { FormFieldUI } from './shared/classes/form-field-ui';
import { FormSchema } from './shared/interfaces/form-schema';
import { FormSection } from './shared/interfaces/form-section';
import { FormField } from './shared/interfaces/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms';

  private formSchema: FormSchema;
  public formSchemaUI: FormSchemaUI;
  loading: boolean;
  saving: boolean;

  public fieldsToUpdate: any = {};


  constructor() {
    this.loading = true;
    this.formSchemaUI = new FormSchemaUI(this.getTestFormSchema());
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

  getTestFormSchema(): FormSchema {
    let formSchema: FormSchema = <FormSchema>

      {
        Name: "Test Schema",
        Description: "Tst Schema Desc",
        Sections: [
          <FormSection><unknown>{
            Title: "Name",
            Order: 1,
            SectionId: 1,
            Fields: [<FormField><unknown>{
              FieldId: 1,
              Label: 'First Name',
              Order: 1,
              Value: 'Dragos',
              ColumnType: 'TEXTBOX',
              IsEnabled: true,
              IsMandatory: true
            },
            <FormField><unknown>{
              FieldId: 2,
              Label: 'Last Name',
              Order: 2,
              Value: 'Durlut',
              ColumnType: 'TEXTBOX',
              IsEnabled: true,
              IsMandatory: true
            },
            <FormField><unknown>{
              FieldId: 5,
              Label: 'School',
              Order: 3,
              Value: 'Princeton',
              ColumnType: 'TEXTBOX',
              IsEnabled: true,
              IsMandatory: false
            },
            <FormField><unknown>{
              FieldId: 6,
              Label: 'Faculty',
              Order: 4,
              Value: 'Harvard',
              ColumnType: 'TEXTBOX',
              IsEnabled: true,
              IsMandatory: true
            }
            ]
          },
          <FormSection><unknown>{
            Title: "Address",
            Order: 2,
            SectionId: 2,
            Fields: [<FormField><unknown>{
              FieldId: 3,
              Label: 'Country',
              Order: 3,
              Value: 'Romania',
              ColumnType: 'TEXTBOX',
              IsEnabled: true
            },
            <FormField><unknown>{
              FieldId: 4,
              Label: 'City',
              Order: 4,
              Value: 'Bucharest',
              ColumnType: 'TEXTBOX',
              IsEnabled: true
            }
            ]
          }
        ]
      };

    return formSchema;
  }

}
