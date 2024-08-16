import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

/**
 * Smart button component.
 */
@Component({
  selector: 'sps-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './sps-button.component.html',
  styleUrl: './sps-button.component.css',
})
export class SpsButtonComponent {
  /**
   * Button label.
   */
  @Input()
  public label: string;

  /**
   * Indicates if the button is disabled.
   */
  @Input()
  public disabled: boolean;

  /**
   * Background color of the button.
   */
  @Input()
  public backgroundColor: string;

  constructor() {
    this.label = 'test';
    this.disabled = false;
    this.backgroundColor = '#ffffff';
  }
}
