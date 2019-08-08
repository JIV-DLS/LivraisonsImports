import { TestBed, inject } from '@angular/core/testing';

import { LieuxLivraisonsService } from './lieuxLivraisons.service';

describe('LieuxLivraisonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LieuxLivraisonsService]
    });
  });

  it('should be created', inject([LieuxLivraisonsService], (service: LieuxLivraisonsService) => {
    expect(service).toBeTruthy();
  }));
});
