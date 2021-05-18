import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

const EMAIL_TMPL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const emailValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.value) {
    return null;
  }

  return EMAIL_TMPL.test(control.value) ? null : { emailError: true };
};

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidator,
      multi: true,
    },
  ],
})
export class EmailValidator implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    return emailValidator(control);
  }

}
