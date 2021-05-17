import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, HeaderComponent, InfoComponent, ModalComponent, SearchComponent } from './components';
import { MaterialModule } from './material.module';

const COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ...COMPONENTS,
    MaterialModule,
  ],
})
export class SharedModule {}
