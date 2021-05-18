import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, EmailValidator } from '../../shared/directives';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: [ '../../shared/form.component.css', './registration.component.css' ],
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  get fc(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [ '', { validators: [ Validators.required, Validators.minLength(6) ] } ],
      email: [ '', { validators: [ Validators.required, emailValidator ] } ],
      password: [ '', { validators: Validators.required } ],
    });
  }

  submit(): void {
    console.log(this.registrationForm.value);
  }
}
