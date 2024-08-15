import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSpartanComponent } from './search-spartan.component';

describe('SearchSpartanComponent', () => {
  let component: SearchSpartanComponent;
  let fixture: ComponentFixture<SearchSpartanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSpartanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSpartanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
