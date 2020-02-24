import { FormFieldType } from '../enums/form-field-type.enum';

export interface FormField {
  FieldId: number;
  Label: string;
  Order: number;
  Value: any;
  DisplayValue: any;
  FormFieldType: FormFieldType;
  IsEnabled: boolean;
  IsMandatory: boolean;
  RegExValidator: string;
  Description: string; 
  FieldInformation: string;
  
}
