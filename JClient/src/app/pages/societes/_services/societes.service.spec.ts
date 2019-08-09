import { TestBed, inject } from '@angular/core/testing';

import { SocietesService } from './societes.service';

describe('SocietesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocietesService]
    });
  });

  it('should be created', inject([SocietesService], (service: SocietesService) => {
    expect(service).toBeTruthy();
  }));
});
