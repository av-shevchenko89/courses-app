import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggle]',
  exportAs: 'toggle',
})
export class ToggleDirective implements AfterViewInit {
  private hidden = true;
  private inputEl: HTMLInputElement;
  private iconEl: Element;

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.inputEl = this.el.nativeElement.querySelector('input');
    this.iconEl = this.el.nativeElement.querySelector('.mat-icon');
  }

  changeType(): void {
    this.hidden = !this.hidden;
    this.inputEl.type = this.hidden ? 'password' : 'text';
    this.iconEl.innerHTML = this.hidden ? 'visibility' : 'visibility_off';
  }

}
