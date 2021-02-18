import { TestBed } from '@angular/core/testing';

import { TwootsService } from './twoots.service';

describe('TwootsService', () => {
  let service: TwootsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwootsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
