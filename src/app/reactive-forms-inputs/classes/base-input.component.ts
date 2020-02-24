import { OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormFieldUI } from './form-field-ui';
import { FormFieldTypeEnum } from '../../shared/enums/form-field-type.enum';

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

  public onValueChange(value: any) {
    /*This function is called only on user input so we use it to emit a change event  and update our model*/
    let emitEvent: boolean = true;
    let setValueToFormControl: boolean = false;
    if (value != undefined && value != null) {
      switch (this.fieldUI.formField.formFieldType) {
        case FormFieldTypeEnum.CheckBox: {
          let boolValue: boolean = <boolean>value;
          this.fieldUI.setValueAndDisplayValue(boolValue, boolValue, emitEvent, setValueToFormControl);
          break;
        }       
        default: {
          this.fieldUI.setValue(value, emitEvent, setValueToFormControl);
          break;
        }
      }
    }
    else {
      console.info(this.fieldUI.formField.label + ' was emptied');
      this.fieldUI.emptyControl(emitEvent, setValueToFormControl);
    }
  }

}
