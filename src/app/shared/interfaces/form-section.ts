import { FormField } from "./form-field";

export interface FormSection {
  title: string;
  order: number;
  sectionId: number;

  fields: FormField[];
}
