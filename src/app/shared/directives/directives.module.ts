import { EmailValidator } from './email-validator/email-validator.directive';
import { NgModule } from '@angular/core';

const DIRECTIVES = [ EmailValidator ];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
