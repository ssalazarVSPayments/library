import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input('appTooltip') public tooltipText!: string;
  private tooltipElement!: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('mouseenter') public onMouseEnter(): void {
    this.showTooltip();
  }

  @HostListener('mouseleave') public onMouseLeave(): void {
    this.hideTooltip();
  }

  private showTooltip(): void {
    this.tooltipElement = this.renderer.createElement('span');
    this.tooltipElement.innerText = this.tooltipText;
    this.renderer.addClass(this.tooltipElement, 'tooltip');

    // Create triangle element
    const triangle: HTMLElement = this.renderer.createElement('div');
    this.renderer.addClass(triangle, 'tooltip-triangle');
    this.renderer.appendChild(this.tooltipElement, triangle);

    // Append the tooltip below the nativeElement
    this.renderer.appendChild(
      this.el.nativeElement.parentNode,
      this.tooltipElement,
    );
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(
      this.tooltipElement,
      'top',
      `${this.el.nativeElement.getBoundingClientRect().bottom}px`,
    );
    this.renderer.setStyle(
      this.tooltipElement,
      'left',
      `${this.el.nativeElement.getBoundingClientRect().left}px`,
    );
  }

  private hideTooltip(): void {
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
      this.tooltipElement = null!;
    }
  }
}
