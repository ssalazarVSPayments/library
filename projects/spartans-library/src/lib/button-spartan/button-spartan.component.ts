import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

/**
 * Spartan button component.
 */
@Component({
  selector: 'app-button-spartan',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button-spartan.component.html',
  styleUrl: './button-spartan.component.scss',
})
export class ButtonSpartanComponent {
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
