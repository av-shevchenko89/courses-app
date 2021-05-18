import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ButtonComponent, HeaderComponent, InfoComponent, ModalComponent, SearchComponent } from './components';
import { EmailValidatorDirective } from './directives';

const COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalComponent,
];

const DIRECTIVES = [ EmailValidatorDirective ];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    MaterialModule,
  ],
})
export class SharedModule {}
