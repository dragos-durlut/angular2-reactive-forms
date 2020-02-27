import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormFieldUiBuilder } from './reactive-forms-inputs/builders/form-field-ui-builder';
import { ReactiveFormsSectionsModule } from './reactive-forms-sections/reactive-forms-sections.module';
import { FormsExampleComponent } from './forms-example/forms-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsSectionsModule
  ],
  providers: [FormFieldUiBuilder ],
  bootstrap: [AppComponent]
})
export class AppModule { }
