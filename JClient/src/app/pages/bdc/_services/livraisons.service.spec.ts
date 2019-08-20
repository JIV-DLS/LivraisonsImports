import { TestBed, inject } from '@angular/core/testing';

import { LivraisonsService } from './livraisonsb.service';

describe('LivraisonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivraisonsService]
    });
  });

  it('should be created', inject([LivraisonsService], (service: LivraisonsService) => {
    expect(service).toBeTruthy();
  }));
});
