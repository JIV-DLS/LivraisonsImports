import { TestBed, inject } from '@angular/core/testing';

import { ReinitialiserMotDePassessService } from './reinitialiserMotDePassess.service';

describe('ReinitialiserMotDePassessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReinitialiserMotDePassessService]
    });
  });

  it('should be created', inject([ReinitialiserMotDePassessService], (service: ReinitialiserMotDePassessService) => {
    expect(service).toBeTruthy();
  }));
});
