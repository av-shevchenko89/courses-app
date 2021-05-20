import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration/duration.pipe';
import { CreationDatePipe } from './creation-date/creation-date.pipe';
import { StringJoinerPipe } from './string-joiner/string-joiner.pipe';
import { SearchPipe } from './search/search.pipe';

const PIPES = [
  DurationPipe,
  CreationDatePipe,
  StringJoinerPipe,
  SearchPipe
];

@NgModule({
  declarations: PIPES,
  imports: [
    CommonModule,
  ],
  exports: PIPES,
})
export class PipesModule {}
