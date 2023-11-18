import { TestBed } from '@angular/core/testing';

import { GmpStorageService } from './gmp-storage.service';

describe('GmpStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpStorageService = TestBed.get(GmpStorageService);
    expect(service).toBeTruthy();
  });
});
