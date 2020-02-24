import { FormSection } from './form-section';

export interface FormSchema {

  name: string;

  description: string;

  sections: FormSection[];
}
