import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './features/courses/courses.module';
import { RegistrationModule } from './features/registration/registration.module';
import { LoginModule } from './features/login/login.module';
import { CourseModule } from './features/course/course.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoursesModule,
    RegistrationModule,
    LoginModule,
    CourseModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
