import { Component, OnInit } from '@angular/core';
import { FormSchemaUI } from '../shared/classes/form-schema-ui';
import { FormSectionUI } from '../shared/classes/form-section-ui';
import { FormFieldUI } from '../shared/classes/form-field-ui';
import { FormSchema } from '../shared/interfaces/form-schema';
import { FormSection } from '../shared/interfaces/form-section';
import { FormField } from '../shared/interfaces/form-field';
import { FormSchemaUiBuilder } from '../reactive-forms-sections/builders/form-schema-ui-builder';
import { FormFieldTypeEnum } from '../shared/enums/form-field-type.enum';


@Component({
  selector: 'app-forms-example',
  templateUrl: './forms-example.component.html',
  styleUrls: ['./forms-example.component.scss']
})
export class FormsExampleComponent {

  private formSchema: FormSchema;
  public formSchemaUI: FormSchemaUI;
  loading: boolean;
  saving: boolean;

  public fieldsToUpdate: any = {};


  constructor(private formSchemaUiBuilder: FormSchemaUiBuilder) {
    this.loading = true;
    let newFormSchema = this.getTestFormSchema();
    this.setupForm(newFormSchema);
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

  private setupForm(formSchema: FormSchema) {

    this.formSchemaUI = this.formSchemaUiBuilder.fromFormSchemaData(formSchema);


    //TODO: set Validators UI
  }

  getTestFormSchema(): FormSchema {
    let formSchema: FormSchema = <FormSchema>

      {
        name: "Test Schema",
        description: "Tst Schema Desc",
        sections: [
          <FormSection><unknown>{
            title: "Name",
            order: 1,
            sectionId: 1,
            fields: [<FormField><unknown>{
              fieldId: 1,
              label: 'First Name',
              order: 1,
              value: 'Dragos',
              formFieldType: FormFieldTypeEnum.Input,
              isEnabled: true,
              isMandatory: true
            },
            <FormField><unknown>{
              fieldId: 2,
              label: 'Last Name',
              order: 2,
              value: 'Durlut',
              formFieldType: FormFieldTypeEnum.Input,
              isEnabled: true,
              isMandatory: true
            },
            <FormField><unknown>{
              fieldId: 5,
              label: 'School',
              order: 3,
              value: 'Princeton',
              formFieldType: FormFieldTypeEnum.Input,
              isEnabled: true,
              isMandatory: false
            },
            <FormField><unknown>{
              fieldId: 6,
              label: 'Faculty',
              order: 4,
              value: 'Harvard',
              formFieldType: FormFieldTypeEnum.Input,
              isEnabled: true,
              isMandatory: true
            }
            ]
          },
          <FormSection><unknown>{
            title: "Address",
            order: 2,
            sectionId: 2,
            fields: [<FormField><unknown>{
              fieldId: 3,
              label: 'Country',
              order: 3,
              value: 'Romania',
              formFieldType: FormFieldTypeEnum.Input,
              isEnabled: true
            },
            <FormField><unknown>{
              fieldId: 4,
              label: 'City',
              order: 4,
              value: 'Bucharest',
              formFieldType: FormFieldTypeEnum.Input,
              isEnabled: true
            }
            ]
          }
        ]
      };

    return formSchema;
  }

}