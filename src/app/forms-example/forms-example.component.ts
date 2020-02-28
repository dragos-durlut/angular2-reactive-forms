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

    this.formSchemaUI.sectionsUI.forEach( (sectionUI: FormSectionUI) => {
      sectionUI.fieldsUI.forEach( (fieldUI: FormFieldUI) => {
        if (fieldUI.fieldFormControl.dirty) {
          this.fieldsToUpdate[fieldUI.formField.fieldId] = fieldUI.formField.value;
        }
      });
    });

    console.info("Fields were updated!");
    console.info(this.fieldsToUpdate);
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
          },
          <FormSection><unknown>{
            title: "Civil State",
            order: 3,
            sectionId: 3,
            fields: [<FormField><unknown>{
              fieldId: 5,
              label: 'Married',
              order: 5,
              value: false,
              formFieldType: FormFieldTypeEnum.CheckBox,
              isEnabled: true
            },
            <FormField><unknown>{
              fieldId: 6,
              label: 'Military',
              order: 6,
              value: true,
              formFieldType: FormFieldTypeEnum.CheckBox,
              isEnabled: true
            }
            ]
          },
          <FormSection><unknown>{
            title: "Description",
            order: 4,
            sectionId: 4,
            fields: [<FormField><unknown>{
              fieldId: 7,
              label: 'Self description',
              order: 7,
              value: 'Something interesting',
              formFieldType: FormFieldTypeEnum.TextArea,
              isEnabled: true
            },
            <FormField><unknown>{
              fieldId: 8,
              label: 'Notes about self',
              order: 8,
              value: 'Special interests',
              formFieldType: FormFieldTypeEnum.TextArea,
              isEnabled: true
            }
            ]
          },
          <FormSection><unknown>{
            title: "Dates",
            order: 5,
            sectionId: 5,
            fields: [<FormField><unknown>{
              fieldId: 9,
              label: 'Date of birth',
              order: 9,
              value: new Date(1988,1,1),
              formFieldType: FormFieldTypeEnum.DateTime,
              isEnabled: true
            },
            <FormField><unknown>{
              fieldId: 10,
              label: 'Graduation date',
              order: 10,
              value: new Date(2006, 6, 1),
              formFieldType: FormFieldTypeEnum.DateTime,
              isEnabled: true
            }
            ]
          }
        ]
      };

    return formSchema;
  }

}
