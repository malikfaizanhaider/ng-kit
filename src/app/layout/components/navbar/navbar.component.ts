import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Private
  _variant: string;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {
    // Set the private defaults
    this._variant = 'vertical-style-1';
  }

  get variant(): string {
    return this._variant;
  }

  @Input()
  set variant(value: string) {
    // Remove the old class name
    this._renderer.removeClass(this._elementRef.nativeElement, this.variant);

    // Store the variant value
    this._variant = value;

    // Add the new class name
    this._renderer.addClass(this._elementRef.nativeElement, value);
  }
}
