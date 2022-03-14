import { TestBed } from '@angular/core/testing';

import { TerminatedGuard } from './terminated.guard';

describe('TerminatedGuard', () => {
  let guard: TerminatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TerminatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
