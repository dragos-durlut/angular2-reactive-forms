import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldInputComponent } from './field-input/field-input.component';
import { MatInputModule } from '@angular/material/input';
import { FieldTextareaComponent } from './field-textarea/field-textarea.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FieldDatePickerComponent } from './field-date-picker/field-date-picker.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FieldCheckboxComponent } from './field-checkbox/field-checkbox.component';


@NgModule({
  declarations: [FieldInputComponent, FieldTextareaComponent, FieldDatePickerComponent, FieldCheckboxComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule
  ],
  exports: [MatInputModule, MatDatepickerModule, MatCheckboxModule]
})
export class ReactiveFormsInputsModule { }
