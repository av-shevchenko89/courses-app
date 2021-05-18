import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {

  transform(duration: number): string {
    if (duration < 0) {
      return '';
    }

    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    return (minutes && minutes < 10) ?
      `${ hours }:0${ minutes }` : `${ hours }:${ minutes }`;
  }

}
