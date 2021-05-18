import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Course } from './course';

import { mockedCourseList } from '../../../assets/mocks.js';
import { ModalComponent } from '../../shared/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [ './courses.component.css' ],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  editable = true;

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.courses = mockedCourseList;
  }

  showModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: 'Modal title',
        message: 'Modal message',
        okButtonText: 'Ok',
        cancelButtonText: 'Cancel',
      },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(res => console.log(res));
  }

  goTo(id: string): void {
    this.router.navigate(['course', id]);
  }
}
