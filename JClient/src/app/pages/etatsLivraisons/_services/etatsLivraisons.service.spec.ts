import { TestBed, inject } from '@angular/core/testing';

import { EtatsLivraisonssService } from './etatsLivraisonss.service';

describe('EtatsLivraisonssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EtatsLivraisonssService]
    });
  });

  it('should be created', inject([EtatsLivraisonssService], (service: EtatsLivraisonssService) => {
    expect(service).toBeTruthy();
  }));
});
