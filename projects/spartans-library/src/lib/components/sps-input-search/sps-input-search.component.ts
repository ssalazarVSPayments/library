import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  HostBinding,
  forwardRef,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime } from 'rxjs/operators';

/**
 * @public
 * @class SpsInputSearchComponent
 * @memberof SpsInputSearchComponent
 * @typedef {SpsInputSearchComponent}
 * @description Search input component
 * @implements {OnInit}
 * @property {string} iconPosition
 * @property {string} placeholder
 * @property {boolean} wFull
 * @property {string} icon
 * @property {string} helperText
 * @property {boolean} error
 * @property {string} errorMessage
 * @property {boolean} disabled
 * @property {boolean} floatLabel
 * @property {EventEmitter<string | null>} changeText
 * @property {FormControl<string | null>} inputText
 * @property {string} helperId
 * @property {boolean} widthFull
 * @property {void} ngOnInit
 * @property {void} onChange
 * @property {void} onTouched
 * @property {boolean} widthFull
 * @property {void} writeValue
 * @property {void} registerOnChange
 * @property {void} registerOnTouched
 * @property {void} setDisabledState
 * @property {void} clearInput
 */
@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    ReactiveFormsModule,
    CommonModule,
    FloatLabelModule,
  ],
  templateUrl: './sps-input-search.component.html',
  styleUrls: ['./sps-input-search.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SpsInputSearchComponent),
      multi: true,
    },
  ],
})
export class SpsInputSearchComponent implements OnInit {
  @Input() public iconPosition: 'left' | 'right';
  @Input() public placeholder: string;
  @Input() public wFull: boolean;
  @Input() public icon: string;
  @Input() public helperText: string;
  @Input() public error: boolean;
  @Input() public errorMessage: string;
  @Input() public disabled: boolean;
  @Input() public floatLabel: boolean;
  @Output() public readonly changeText: EventEmitter<string | null>;

  public inputText: FormControl<string | null> = new FormControl<string | null>(
    '',
    [
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(/^[a-zA-Z0-9\s]*$/),
    ],
  );

  // Generate a random id for the helper text
  public helperId: string;

  /**
   * @public
   * @function constructor
   * @memberof SpsInputSearchComponent
   * @description Constructor of the component
   */
  constructor() {
    this.iconPosition = 'right';
    this.placeholder = 'Search...';
    this.wFull = false;
    this.icon = 'pi pi-search';
    this.helperText = '';
    this.error = false;
    this.errorMessage = '';
    this.disabled = false;
    this.floatLabel = false;
    this.changeText = new EventEmitter<string | null>();
    this.helperId = `input-helper-${Math.floor(Math.random() * 10000)}`;
  }

  /**
   * @public
   * @function ngOnInit
   * @memberof SpsInputSearchComponent
   * @description Init the component
   * @returns {void}
   */
  public ngOnInit(): void {
    this.inputText.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string | null) => {
        if (value !== null) {
          this.icon = value ? 'pi pi-times' : 'pi pi-search'; // Change the icon to a close icon if the input has a value
          if (this.inputText.valid) {
            this.changeText.emit(value);
          }
        }
      });

    // Disable the input if it is disabled
    if (this.disabled) {
      this.inputText.disable();
    }
  }

  /**
   * @public
   * @function onChange
   * @memberof SpsInputSearchComponent
   * @description Function to call when the value changes.
   * @param {string | null} value
   * @returns {void}
   */
  public onChange(value: string | null): void {
    this.inputText.setValue(value, { emitEvent: false });
  }

  /**
   * @public
   * @function onTouched
   * @memberof SpsInputSearchComponent
   * @description Function to call when the input is touched.
   * @returns {void}
   */
  public onTouched(): void {
    this.inputText.markAsTouched();
  }

  /**
   * @public
   * @readonly
   * @function widthFull
   * @memberof SpsInputSearchComponent
   * @description Full width class
   * @type {boolean}
   * @property {boolean} widthFull
   * @returns {boolean}
   *
   */
  @HostBinding('class.w-full')
  public get widthFull(): boolean {
    return this.wFull;
  }

  /**
   * @param {string} value
   * @returns {void}
   * @memberof SpsInputSearchComponent
   * @function writeValue
   * @description Write a value to the input
   * @public
   */
  public writeValue(value: string): void {
    this.inputText.setValue(value, { emitEvent: false });
  }

  /**
   *
   * @public
   * @function registerOnChange
   * @memberof SpsInputSearchComponent
   * @description Register a function to call when the value changes
   * @param {funtion} fn
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  public registerOnChange(fn: (value: string) => void): void {
    this.inputText.valueChanges.subscribe((value: string | null) => {
      if (value) {
        fn(value);
      }
    });
  }

  /**
   *
   * @public
   * @function registerOnTouched
   * @memberof SpsInputSearchComponent
   * @description Makes the input touched
   * @param {funtion} fn
   * @returns {void}
   */
  public registerOnTouched(fn: () => void): void {
    this.inputText.markAsTouched();
    fn();
  }

  /**
   * @public
   * @function setDisabledState
   * @memberof SpsInputSearchComponent
   * @description Deshabilita el input
   * @param {boolean} isDisabled
   * @returns {void}
   */
  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputText.disable();
    } else {
      this.inputText.enable();
    }
  }

  /**
   * @public
   * @function clearInput
   * @memberof SpsInputSearchComponent
   * @description Clear the input value and change the icon to the search icon
   * @returns {void}
   */
  public clearInput(): void {
    this.inputText.setValue('');
    this.icon = 'pi pi-search';
  }
}
