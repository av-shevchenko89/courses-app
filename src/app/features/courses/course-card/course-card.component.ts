import { Component, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: [ './course-card.component.css' ],
})
export class CourseCardComponent {

  @Input() course: Course;

  constructor() { }

  durToTime(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    const hoursStr = (hours < 2) ? 'hour' : 'hours';

    return (minutes && minutes < 10) ?
      `${ hours }:0${ minutes } ${ hoursStr }` : `${ hours }:${ minutes } ${ hoursStr }`;
  }

}
