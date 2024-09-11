import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SpsInputSearchComponent } from './sps-input-search.component';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SpsInputSearchComponent', () => {
  let component: SpsInputSearchComponent;
  let fixture: ComponentFixture<SpsInputSearchComponent>;
  let inputSearchComponent: SpsInputSearchComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SpsInputSearchComponent],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: SpsInputSearchComponent,
          multi: true,
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpsInputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputSearchComponent = fixture.debugElement.children[0].componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.iconPosition).toBe('right');
    expect(component.placeholder).toBe('Search...');
    expect(component.wFull).toBeFalse();
    expect(component.icon).toBe('pi pi-search');
    expect(component.helperText).toBe('');
    expect(component.error).toBeFalse();
  });

  it('should register onChange function', () => {
    const fn = jasmine.createSpy('onChange');
    component.registerOnChange(fn);
    component.onChange('new value');
    component.inputText.setValue('new value');
    expect(fn).toHaveBeenCalledWith('new value');
  });

  it('should register and call onChange when value changes', () => {
    const onChangeSpy = jasmine.createSpy('onChange');
    inputSearchComponent.registerOnChange(onChangeSpy);
    inputSearchComponent.inputText.setValue('new value');
    fixture.detectChanges();
    expect(onChangeSpy).toHaveBeenCalledWith('new value');
  });

  it('should register onTouched function', () => {
    const fn = jasmine.createSpy('onTouched');
    component.registerOnTouched(fn);
    component.onTouched();
    expect(fn).toHaveBeenCalled();
  });

  it('should trigger onChange when value changes', () => {
    const mockOnChange = jasmine.createSpy('onChange');
    component.registerOnChange(mockOnChange);
    component.inputText.setValue('valid value');
    fixture.detectChanges();
    expect(mockOnChange).toHaveBeenCalledWith('valid value');
  });

  it('should trigger onTouched when the input is touched', () => {
    const mockOnTouched = jasmine.createSpy('onTouched');
    component.registerOnTouched(mockOnTouched);
    component.onTouched();
    fixture.detectChanges();
    expect(mockOnTouched).toHaveBeenCalled();
  });

  it('should implement ControlValueAccessor interface', () => {
    const mockValue = 'test value';
    component.writeValue(mockValue);
    fixture.detectChanges();
    expect(component.inputText.value).toBe(mockValue);
  });

  it('should update icon when input has value', fakeAsync(() => {
    component.inputText.setValue('test');
    fixture.detectChanges();
    tick(300);
    expect(component.icon).toBe('pi pi-times');
  }));

  it('should change default icon when input is cleared', fakeAsync(() => {
    component.inputText.setValue('test');
    fixture.detectChanges();
    tick(300);
    expect(component.icon).toBe('pi pi-times');

    component.inputText.setValue('');
    fixture.detectChanges();
    tick(300);
    expect(component.icon).toBe('pi pi-search');
  }));

  it('should emit value changes when input is valid', fakeAsync(() => {
    spyOn(component.changeText, 'emit');
    component.inputText.setValue('valid input');
    tick(300);
    expect(component.changeText.emit).toHaveBeenCalledWith('valid input');
  }));

  it('should disable input when disabled input is true', () => {
    component.disabled = true;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.inputText.disabled).toBeTrue();
  });

  it('should clear input when clearInput is called', () => {
    component.inputText.setValue('clear me');
    component.clearInput();
    expect(component.inputText.value).toBe('');
    expect(component.icon).toBe('pi pi-search');
  });

  it('should apply correct CSS class for full width', () => {
    component.wFull = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.classList).toContain('w-full');
  });

  it('should display error message when input is invalid and touched', () => {
    component.inputText.setValue('a'); // Invalid input with less than 3 characters
    component.inputText.markAsTouched();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const errorMessage = compiled.querySelector('.error-message') as HTMLElement;
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.textContent).toContain(component.errorMessage);
  });

  it('should handle form control writeValue correctly', () => {
    component.writeValue('test value');
    expect(component.inputText.value).toBe('test value');
  });

  it('should handle setDisabledState correctly', () => {
    component.setDisabledState?.(true);
    expect(component.inputText.disabled).toBeTrue();

    component.setDisabledState?.(false);
    expect(component.inputText.enabled).toBeTrue();
  });

  it('should call setDisabledState', () => {
    component.setDisabledState(true);
    expect(component.inputText.disabled).toBeTrue();
    component.setDisabledState(false);
    expect(component.inputText.enabled).toBeTrue();
  });
});
