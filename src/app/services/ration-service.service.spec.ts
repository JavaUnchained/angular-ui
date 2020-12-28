import { TestBed } from '@angular/core/testing';

import { RationServiceService } from './ration-service.service';

describe('RationServiceService', () => {
  let service: RationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
