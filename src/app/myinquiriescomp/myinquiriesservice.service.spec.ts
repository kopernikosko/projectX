import { TestBed } from '@angular/core/testing';

import { MyinquiriesserviceService } from './myinquiriesservice.service';

describe('MyinquiriesserviceService', () => {
  let service: MyinquiriesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyinquiriesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
