import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './course-form/course-form.component';


@NgModule({
  declarations: [
    CourseComponent,
    CourseFormComponent,
  ],
  exports: [
    CourseComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    FormBuilder,
  ],
})
export class CourseModule {}
