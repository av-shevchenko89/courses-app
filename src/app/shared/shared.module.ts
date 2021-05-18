import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    DirectivesModule,
  ],
  exports: [
    MaterialModule,
    ComponentsModule,
    DirectivesModule,
  ],
})
export class SharedModule {}
