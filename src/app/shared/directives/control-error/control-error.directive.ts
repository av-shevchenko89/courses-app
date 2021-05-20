import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appControlError]',
})
export class ControlErrorDirective {

  @Input() element: ElementRef;
  @Input() controlName: string;

  constructor() { }

}
