import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [
    MaterialModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class SharedModule {}
