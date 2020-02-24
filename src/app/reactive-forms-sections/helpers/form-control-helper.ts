import { FormGroup, AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormControlHelper {
  public getAllControls(mainFormGroup: FormGroup): Map<string, AbstractControl> {
    let allControls: Map<string, AbstractControl> = new Map<string, AbstractControl>();

    Object.keys(mainFormGroup.controls).forEach(sectionKey => {
      let section: FormGroup = mainFormGroup.controls[sectionKey] as FormGroup;
      Object.keys(section.controls).forEach(fieldKey => {
        let control = section.controls[fieldKey];
        allControls.set(fieldKey, control);
      });
    });

    return allControls;
  }
}
