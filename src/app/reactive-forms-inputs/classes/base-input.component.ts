import { OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormFieldUI } from './form-field-ui';

export class BaseInputComponent implements OnInit {


  @Input() fieldUI: FormFieldUI;
  private oldValue: any = '';
  @Output()
  valueChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
        
  }

  onBlur(event: any) {
    this.setValue();
  }

  onEnter() {
    this.setValue();
  }


  private setValue(): void {
    var newValue = this.fieldUI.formField.value;
    if (newValue != this.oldValue) {
      this.fieldUI.fieldFormControl.setValue(newValue);
      this.fieldUI.fieldFormControl.updateValueAndValidity();
      this.oldValue = newValue;
      this.valueChange.emit(newValue);
    }

  }

}
