import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsInputSearchComponent } from './sps-input-search.component';

describe('SpsInputSearchComponent', () => {
  let component: SpsInputSearchComponent;
  let fixture: ComponentFixture<SpsInputSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpsInputSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpsInputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
