import { TestBed } from '@angular/core/testing';

import { StudentStateService } from './student-state.service';

describe('StudentStateService', () => {
  let service: StudentStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
