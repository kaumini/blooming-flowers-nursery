import { TestBed, inject } from '@angular/core/testing';

import { ParentAuthGuard } from './parent-auth-guard.service';

describe('ParentAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentAuthGuard]
    });
  });

  it('should be created', inject([ParentAuthGuard], (service: ParentAuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
