import { TestBed } from '@angular/core/testing';

import { CartClientService } from './cart-client.service';

describe('CartClientService', () => {
  let service: CartClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
