import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsButtonComponent } from './sps-button.component';

describe('SpsButtonComponent', () => {
  let component: SpsButtonComponent;
  let fixture: ComponentFixture<SpsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpsButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
