import { TestBed } from '@angular/core/testing';

import { AsteroidDataService } from './asteroid-data.service';

describe('AsteroidDataService', () => {
  let service: AsteroidDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsteroidDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
