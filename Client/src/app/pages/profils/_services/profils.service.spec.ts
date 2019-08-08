import { TestBed, inject } from '@angular/core/testing';

import { ProfilsService } from './profils.service';

describe('ProfilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilsService]
    });
  });

  it('should be created', inject([ProfilsService], (service: ProfilsService) => {
    expect(service).toBeTruthy();
  }));
});
