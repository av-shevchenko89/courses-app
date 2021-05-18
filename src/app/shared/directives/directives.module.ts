import { NgModule } from '@angular/core';
import { EmailValidator } from './email-validator/email-validator.directive';
import { ToggleDirective } from './toggle/toggle.directive';

const DIRECTIVES = [
  EmailValidator,
  ToggleDirective
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
