import { TestBed, inject } from '@angular/core/testing';

import { TransitsService } from './transits.service';

describe('TransitsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransitsService]
    });
  });

  it('should be created', inject([TransitsService], (service: TransitsService) => {
    expect(service).toBeTruthy();
  }));
});
