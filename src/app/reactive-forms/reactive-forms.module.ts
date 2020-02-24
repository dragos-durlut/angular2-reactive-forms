import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsInputsModule } from '../reactive-forms-inputs/reactive-forms-inputs.module';
import { LabelWithFieldTupleComponent } from './label-with-field-tuple/label-with-field-tuple.component';



@NgModule({
  declarations: [LabelWithFieldTupleComponent],
  imports: [
    CommonModule,
    ReactiveFormsInputsModule
  ]
})
export class ReactiveFormsModule { }
