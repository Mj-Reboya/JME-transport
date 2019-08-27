import { TestBed } from '@angular/core/testing';

import { TrasactionApiService } from './trasaction-api.service';

describe('TrasactionApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrasactionApiService = TestBed.get(TrasactionApiService);
    expect(service).toBeTruthy();
  });
});
