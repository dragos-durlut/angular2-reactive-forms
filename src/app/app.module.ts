import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from './reactive-forms/reactive-forms.module';
import { FormFieldUiBuilder } from './reactive-forms-inputs/builders/form-field-ui-builder';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [FormFieldUiBuilder ],
  bootstrap: [AppComponent]
})
export class AppModule { }
