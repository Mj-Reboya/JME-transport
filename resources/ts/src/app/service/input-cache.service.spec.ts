import { TestBed } from '@angular/core/testing';

import { InputCacheService } from './input-cache.service';

describe('InputCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputCacheService = TestBed.get(InputCacheService);
    expect(service).toBeTruthy();
  });
});
