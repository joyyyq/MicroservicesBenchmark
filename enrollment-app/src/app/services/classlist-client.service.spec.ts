import { TestBed } from '@angular/core/testing';

import { ClasslistClientService } from './classlist-client.service';

describe('ClasslistClientService', () => {
  let service: ClasslistClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasslistClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
