import { TestBed } from '@angular/core/testing';

import { SpartansLibraryService } from './spartans-library.service';

describe('SpartansLibraryService', () => {
  let service: SpartansLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpartansLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
