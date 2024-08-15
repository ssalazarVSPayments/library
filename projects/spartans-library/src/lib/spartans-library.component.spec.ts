import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartansLibraryComponent } from './spartans-library.component';

describe('SpartansLibraryComponent', () => {
  let component: SpartansLibraryComponent;
  let fixture: ComponentFixture<SpartansLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpartansLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpartansLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
