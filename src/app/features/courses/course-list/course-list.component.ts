import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [ './course-list.component.css' ],
})
export class CourseListComponent {

  @Input() courses: Course[];
  @Input() editable: boolean;

  @Output() toCourse = new EventEmitter<string>();

  constructor() { }

  goToCourse(id: string): void {
    this.toCourse.emit(id);
  }
}

