import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration/duration.pipe';
import { CreationDatePipe } from './creation-date/creation-date.pipe';
import { StringJoinerPipe } from './string-joiner/string-joiner.pipe';

const PIPES = [
  DurationPipe,
  CreationDatePipe,
  StringJoinerPipe,
];

@NgModule({
  declarations: PIPES,
  imports: [
    CommonModule,
  ],
  exports: PIPES,
})
export class PipesModule {}
