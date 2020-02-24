import { Component, OnInit } from '@angular/core';
import { BaseInputComponent } from '../classes/base-input.component';

@Component({
  selector: 'app-field-textarea',
  templateUrl: './field-textarea.component.html',
  styleUrls: ['./field-textarea.component.scss']
})
export class FieldTextareaComponent extends BaseInputComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
