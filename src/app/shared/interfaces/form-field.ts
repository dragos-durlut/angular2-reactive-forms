import { FormFieldTypeEnum } from '../enums/form-field-type.enum';

export interface FormField {
  fieldId: number;
  label: string;
  order: number;
  value: any;
  displayValue: any;
  formFieldType: FormFieldTypeEnum;
  isEnabled: boolean;
  isMandatory: boolean;
  regExValidator: string;
  description: string; 
  fieldInformation: string;
  
}
