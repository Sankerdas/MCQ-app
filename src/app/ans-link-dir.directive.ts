import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appAnsLinkDir]'
})
export class AnsLinkDirDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer ) { }
  @HostListener('click') onclick() {
    const hostElem = this.elRef.nativeElement;
    this.renderer.setElementClass(hostElem, 'selAns', true);
    this.renderer.setElementClass(hostElem.parentNode, 'disable', true);
  }

}
