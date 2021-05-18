import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    BrowserAnimationsModule,
    LoginModule,
    RegistrationModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
