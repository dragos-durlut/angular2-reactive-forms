import { Component, OnInit, Input } from '@angular/core';
import { FormFieldUI } from '../../shared/classes/form-field-ui';

@Component({
  selector: '[app-label-with-field-tuple]',
  templateUrl: './label-with-field-tuple.component.html',
  styleUrls: ['./label-with-field-tuple.component.scss']
})
export class LabelWithFieldTupleComponent implements OnInit {

  @Input() fieldUI: FormFieldUI;

  constructor() { }

  ngOnInit() {
  }

}
