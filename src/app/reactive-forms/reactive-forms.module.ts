import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsInputsModule } from '../reactive-forms-inputs/reactive-forms-inputs.module';
import { LabelWithFieldTupleComponent } from './label-with-field-tuple/label-with-field-tuple.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { MainFormComponent } from './main-form/main-form.component';



@NgModule({
  declarations: [LabelWithFieldTupleComponent, FormSectionComponent, MainFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsInputsModule
  ],
  exports: [
    MainFormComponent, LabelWithFieldTupleComponent
  ]
})
export class ReactiveFormsModule { }
