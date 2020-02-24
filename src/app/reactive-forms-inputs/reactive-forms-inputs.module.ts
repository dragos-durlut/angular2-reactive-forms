import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldInputComponent } from './field-input/field-input.component';
import { MatInputModule } from '@angular/material/input';
import { FieldTextareaComponent } from './field-textarea/field-textarea.component';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [FieldInputComponent, FieldTextareaComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule
  ],
  exports: [MatInputModule, MatDatepickerModule]
})
export class ReactiveFormsInputsModule { }
