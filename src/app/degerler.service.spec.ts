import { TestBed } from '@angular/core/testing';

import { DegerlerService } from './degerler.service';

describe('DegerlerService', () => {
  let service: DegerlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DegerlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
