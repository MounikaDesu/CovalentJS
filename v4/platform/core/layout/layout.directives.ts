import { Optional, Directive, Input, Renderer2, ElementRef, Inject, forwardRef } from '@angular/core';
import { TdLayoutComponent } from './layout.component';
import { BaseLayoutToggleDirective } from './layout-toggle.class';

@Directive({
  selector: '[tdLayoutToggle]',
})
export class TdLayoutToggleDirective extends BaseLayoutToggleDirective {
  @Input('tdLayoutToggle')
  set tdLayoutToggle(tdLayoutToggle: boolean) {
    this.disabled = !(<any>tdLayoutToggle === '' || tdLayoutToggle);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => TdLayoutComponent)) layout: TdLayoutComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.toggle();
  }
}

@Directive({
  selector: '[tdLayoutClose]',
})
export class TdLayoutCloseDirective extends BaseLayoutToggleDirective {
  @Input('tdLayoutClose')
  set tdLayoutClose(tdLayoutClose: boolean) {
    this.disabled = !(<any>tdLayoutClose === '' || tdLayoutClose);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => TdLayoutComponent)) layout: TdLayoutComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.close();
  }
}

@Directive({
  selector: '[tdLayoutOpen]',
})
export class TdLayoutOpenDirective extends BaseLayoutToggleDirective {
  @Input('tdLayoutOpen')
  set tdLayoutClose(tdLayoutOpen: boolean) {
    this.disabled = !(<any>tdLayoutOpen === '' || tdLayoutOpen);
  }

  constructor(
    @Optional() @Inject(forwardRef(() => TdLayoutComponent)) layout: TdLayoutComponent,
    renderer: Renderer2,
    elementRef: ElementRef,
  ) {
    super(layout, renderer, elementRef);
  }

  onClick(): void {
    this._layout.open();
  }
}
