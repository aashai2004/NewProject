import { TestBed } from '@angular/core/testing';

import { PmxService } from './pmx.service';

describe('PmxService', () => {
  let service: PmxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
