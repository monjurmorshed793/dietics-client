import { TestBed } from '@angular/core/testing';

import { TestResponseService } from './test-response.service';

describe('TestResponseService', () => {
  let service: TestResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
