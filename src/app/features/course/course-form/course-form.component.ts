import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { authorValidator } from './author-validator';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.css' ],
})
export class CourseFormComponent implements OnInit {

  courseForm: FormGroup = this.fb.group({
    title: [ '', Validators.required ],
    description: [ '', Validators.required ],
    duration: [ null, { validators: [ Validators.required, Validators.min(0) ] } ],
    newAuthor: this.fb.group({
      authorName: [ '', authorValidator ],
      authors: this.fb.array([]),
    }),
  });

  get fc(): { [key: string]: AbstractControl } {
    return this.courseForm.controls;
  }

  get authors(): FormArray {
    return this.courseForm.get('newAuthor').get('authors') as FormArray;
  }

  get authorName(): FormControl {
    return this.courseForm.get('newAuthor').get('authorName') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.courseForm.value);
  }

  addAuthor(): void {
    const newAuthor = this.authorName.value;
    this.authors.push(this.fb.control(newAuthor));

    this.authorName.patchValue('');
  }

  removeAuthor(i: number): void {
    this.authors.removeAt(i);
  }
}
