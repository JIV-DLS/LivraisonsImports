import { TestBed, inject } from '@angular/core/testing';

import { NaviresService } from './navires.service';

describe('NaviresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NaviresService]
    });
  });

  it('should be created', inject([NaviresService], (service: NaviresService) => {
    expect(service).toBeTruthy();
  }));
});
