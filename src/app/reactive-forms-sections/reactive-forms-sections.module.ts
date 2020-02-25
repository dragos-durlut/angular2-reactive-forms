import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsInputsModule } from '../reactive-forms-inputs/reactive-forms-inputs.module';
import { FormSectionComponent } from './form-section/form-section.component';
import { MainFormComponent } from './main-form/main-form.component';



@NgModule({
  declarations: [FormSectionComponent, MainFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsInputsModule
  ],
  exports: [
    MainFormComponent
  ]
})
export class ReactiveFormsSectionsModule { }
