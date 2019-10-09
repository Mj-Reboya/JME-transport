import { TestBed } from '@angular/core/testing';

import { SignupUserService } from './signup-user.service';

describe('SignupUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupUserService = TestBed.get(SignupUserService);
    expect(service).toBeTruthy();
  });
});
