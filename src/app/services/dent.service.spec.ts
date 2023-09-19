import { TestBed } from '@angular/core/testing';

import { DentService } from './dent.service';

describe('DentService', () => {
  let service: DentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
