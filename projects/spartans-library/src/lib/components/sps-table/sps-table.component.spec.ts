import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsTableComponent } from './sps-table.component';

describe('SpsTableComponent', () => {
  let component: SpsTableComponent;
  let fixture: ComponentFixture<SpsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
