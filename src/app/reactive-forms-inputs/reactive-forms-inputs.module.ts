import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldInputComponent } from './field-input/field-input.component';
import { MatInputModule } from '@angular/material/input';
import { FieldTextareaComponent } from './field-textarea/field-textarea.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FieldDatePickerComponent } from './field-date-picker/field-date-picker.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FieldCheckboxComponent } from './field-checkbox/field-checkbox.component';
import { FieldSwitcherComponent } from './field-switcher/field-switcher.component';
import { FormFieldUiBuilder } from './builders/form-field-ui-builder';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule, StyleUtils, StylesheetMap, MediaMarshaller, ɵMatchMedia, BreakPointRegistry, PrintHook, LayoutStyleBuilder, FlexStyleBuilder, ShowHideStyleBuilder, FlexOrderStyleBuilder, FlexFillStyleBuilder } from '@angular/flex-layout';

@NgModule({
  declarations: [FieldInputComponent, FieldTextareaComponent, FieldDatePickerComponent, FieldCheckboxComponent, FieldSwitcherComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule ,
    MatFormFieldModule,
    MatInputModule,    
    MatDatepickerModule,
    MatCheckboxModule
  ],
  providers: [
     FormFieldUiBuilder
  ,
    StyleUtils, StylesheetMap, MediaMarshaller, ɵMatchMedia, BreakPointRegistry, PrintHook, LayoutStyleBuilder, FlexStyleBuilder, ShowHideStyleBuilder, FlexOrderStyleBuilder, FlexFillStyleBuilder
  ]
  ,
  exports: [
      FormsModule
    , ReactiveFormsModule
    , FlexLayoutModule
    ,MatFormFieldModule
    , MatInputModule
    , MatDatepickerModule
    , MatCheckboxModule
    , FieldCheckboxComponent
    , FieldDatePickerComponent
    , FieldInputComponent
    , FieldTextareaComponent
    , FieldSwitcherComponent    
  
  ]
})
export class ReactiveFormsInputsModule { }
