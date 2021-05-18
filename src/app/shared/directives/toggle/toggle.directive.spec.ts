import { ToggleDirective } from './toggle.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `
      <mat-form-field appearance="outline" appToggle #t="toggle">
          <mat-label>Password</mat-label>
          <input matInput type="password" required>
          <mat-icon matSuffix (click)="t.changeType()">visibility</mat-icon>
      </mat-form-field>
  `,
})
class TestComponent {}

describe('ToggleDirective', () => {
  let fixture: ComponentFixture<any>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleDirective, TestComponent ],

    })
      .createComponent(TestComponent);

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
