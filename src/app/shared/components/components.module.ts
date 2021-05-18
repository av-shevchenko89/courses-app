import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { InfoComponent } from './info/info.component';
import { SearchComponent } from './search/search.component';
import { ModalComponent } from './modal/modal.component';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

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
    MaterialModule
  ],
  exports: COMPONENTS,
})
export class ComponentsModule {}
