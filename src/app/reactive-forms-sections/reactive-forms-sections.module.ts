import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsInputsModule } from '../reactive-forms-inputs/reactive-forms-inputs.module';
import { FormSectionComponent } from './form-section/form-section.component';
import { MainFormComponent } from './main-form/main-form.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [FormSectionComponent, MainFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsInputsModule,
    MatButtonModule
  ],
  exports: [
    MainFormComponent
  ]
})
export class ReactiveFormsSectionsModule { }
