import { TestBed } from '@angular/core/testing';

import { PokinfService } from './pokinf.service';

describe('PokinfService', () => {
  let service: PokinfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokinfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
