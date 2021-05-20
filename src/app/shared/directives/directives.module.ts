import { NgModule } from '@angular/core';
import { EmailValidator } from './email-validator/email-validator.directive';
import { ToggleDirective } from './toggle/toggle.directive';
import { ControlErrorDirective } from './control-error/control-error.directive';

const DIRECTIVES = [
  EmailValidator,
  ToggleDirective,
  ControlErrorDirective
];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
