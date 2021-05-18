import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const authorValidator: ValidatorFn = (control: FormControl): ValidationErrors | null => {
  if (!control.value) {
    return null;
  }

  return /^[A-Za-z0-9 _]+$/.test(control.value) ? null : { authorError: true };
};
