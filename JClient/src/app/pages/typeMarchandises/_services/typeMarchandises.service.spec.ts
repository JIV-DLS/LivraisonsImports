import { TestBed, inject } from '@angular/core/testing';

import { TypeMarchandisesService } from './typeMarchandises.service';

describe('TypeMarchandisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeMarchandisesService]
    });
  });

  it('should be created', inject([TypeMarchandisesService], (service: TypeMarchandisesService) => {
    expect(service).toBeTruthy();
  }));
});
