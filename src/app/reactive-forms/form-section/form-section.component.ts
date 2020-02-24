import { Component, OnInit, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormSectionUI } from '../../shared/classes/form-section-ui';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit, AfterViewInit {

  @Input() sectionUI: FormSectionUI

  constructor(private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
  }

  //https://stackoverflow.com/a/39787056/249895
  //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
  ngAfterViewInit() {
    this.cd.detectChanges();
  }

}
