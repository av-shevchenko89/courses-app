import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    RegistrationComponent,
  ],
  providers: [
    FormBuilder,
  ],
})
export class RegistrationModule {}
