import { TestBed } from '@angular/core/testing';

import { CpCommonsLibService } from './cp-commons-lib.service';

describe('CpCommonsLibService', () => {
  let service: CpCommonsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpCommonsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
