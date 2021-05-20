import { TestBed } from '@angular/core/testing';

import { ProfClientService } from './prof-client.service';

describe('ProfClientService', () => {
  let service: ProfClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
