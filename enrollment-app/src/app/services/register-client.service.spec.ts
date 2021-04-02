import { TestBed } from '@angular/core/testing';

import { RegisterClientService } from './register-client.service';

describe('RegisterClientService', () => {
  let service: RegisterClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
