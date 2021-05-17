import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import { SharedModule } from '../../shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseCardComponent } from './course-card/course-card.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        CourseListComponent,
        CourseCardComponent
      ],
      imports: [
        SharedModule,
        BrowserAnimationsModule
      ],
      providers: [
        MatDialog,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    dialog = TestBed.inject(MatDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should showModal', () => {
    const spy = spyOn(dialog, 'open').and.callThrough();

    const data = {
      title: 'Modal title',
      message: 'Modal message',
      okButtonText: 'Ok',
      cancelButtonText: 'Cancel',
    };

    component.showModal();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(ModalComponent, { data, disableClose: true });
  });
});
