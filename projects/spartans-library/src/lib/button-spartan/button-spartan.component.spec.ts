import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSpartanComponent } from './button-spartan.component';

describe('ButtonSpartanComponent', () => {
  let component: ButtonSpartanComponent;
  let fixture: ComponentFixture<ButtonSpartanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSpartanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSpartanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
