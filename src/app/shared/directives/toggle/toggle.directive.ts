import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggle]',
  exportAs: 'toggle',
})
export class ToggleDirective implements AfterViewInit {
  private hidden = true;
  private inputEl: HTMLInputElement;
  private iconEl: Element;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.inputEl = this.el.nativeElement.querySelector('input');
    this.iconEl = this.el.nativeElement.querySelector('.mat-icon');
  }

  changeType(): void {
    this.hidden = !this.hidden;
    this.renderer.setAttribute(this.inputEl, 'type', this.hidden ? 'password' : 'text');
    this.renderer.setProperty(this.iconEl, 'innerHTML', this.hidden ? 'visibility' : 'visibility_off');
  }

}
