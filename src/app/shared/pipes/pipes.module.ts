import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration.pipe';

const PIPES = [
  DurationPipe
];

@NgModule({
  declarations: PIPES,
  imports: [
    CommonModule,
  ],
  exports: PIPES,
})
export class PipesModule {}
