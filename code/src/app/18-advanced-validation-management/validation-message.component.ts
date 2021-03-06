import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  selector: 'app-validation-message',
  template: `<div *ngIf="errorMessage !== null" class="error">{{errorMessage}}</div>`
})
export class ValidationMessageComponent {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
