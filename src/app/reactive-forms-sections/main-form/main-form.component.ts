import { Component, OnInit, Input } from '@angular/core';
import { FormSchemaUI } from '../../shared/classes/form-schema-ui';
import { Subject } from 'rxjs';
import { NgForm, AbstractControl } from '@angular/forms';
import { tap, switchMap, startWith, take, filter } from 'rxjs/operators';
import { FormControlHelper } from '../helpers/form-control-helper';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  @Input() formSchemaUI: FormSchemaUI;
  @Input() submitButtonText: string = 'Submit';
  @Input() submittingButtonText: string = '';

  @Input() submitFn: Function;
  submitting: boolean = false;
  formSubmitSubject$: Subject<NgForm>;

  constructor(private formControlHelper: FormControlHelper) {

    this.formSubmitSubject$ = new Subject();

    //https://stackoverflow.com/a/52191003/249895
    //Angular doesn't wait for async validators to complete before firing ngSubmit. So the form may be invalid if the validators have not resolved.
    this.formSubmitSubject$
      .pipe(
        tap(() => { this.formSchemaUI.mainFormGroup.markAsDirty(); })
        , switchMap(() =>
          this.formSchemaUI.mainFormGroup.statusChanges.pipe(
            startWith(this.formSchemaUI.mainFormGroup.status),
            filter(status => status !== 'PENDING'),
            take(1)
          )
        )
      )
      .subscribe(() => { this.submitForm(); });
  }

  ngOnInit() {
  }

  private async submitForm() {
    if (this.submitting) return;

    let allControls = this.formControlHelper.getAllControls(this.formSchemaUI.mainFormGroup);

    let hasInvalidControls = this.hasInvalidControls(allControls);
    if (hasInvalidControls) {
      console.warn("Some fields are incorrect!");
      alert("Some fields are incorrect!");
      return;
    }

    this.submitting = true;
    this.formSchemaUI.mainFormGroup.disable();

    if (this.submitFn)
      try {
        await this.submitFn();
      } catch (ex) {
        console.error(ex);
        alert(ex);
      }

    this.submitting = false;
    this.formSchemaUI.mainFormGroup.enable();
  }

  private hasInvalidControls(allControls: Map<string, AbstractControl>): boolean {
    let invalidControls: Map<string, AbstractControl> = new Map<string, AbstractControl>();
    allControls.forEach(function (formControl, key, map) {
      if (formControl.invalid) {
        invalidControls.set(key, formControl);
        formControl.markAsTouched();
      }
    });

    return (invalidControls.size > 0);
  }

}
