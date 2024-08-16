import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsPaginationComponent } from './sps-pagination.component';

describe('SpsPaginationComponent', () => {
  let component: SpsPaginationComponent;
  let fixture: ComponentFixture<SpsPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpsPaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
