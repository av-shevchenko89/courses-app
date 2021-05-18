import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate',
})
export class CreationDatePipe implements PipeTransform {

  transform(date: string): string {
    const dateArr = date.split('/');

    const day = (parseFloat(dateArr[1]) < 10) ? `0${ dateArr[1] }` : `${ dateArr[1] }`;
    const month = (parseFloat(dateArr[0]) < 10) ? `0${ dateArr[0] }` : `${ dateArr[0] }`;
    const year = dateArr[2];

    return `${ day }.${ month }.${ year }`;
  }

}
