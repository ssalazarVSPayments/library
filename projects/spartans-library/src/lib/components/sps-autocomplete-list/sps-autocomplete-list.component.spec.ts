import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpsAutocompleteListComponent } from './sps-autocomplete-list.component';

describe('SpsAutocompleteListComponent', () => {
  let component: SpsAutocompleteListComponent;
  let fixture: ComponentFixture<SpsAutocompleteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpsAutocompleteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpsAutocompleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
