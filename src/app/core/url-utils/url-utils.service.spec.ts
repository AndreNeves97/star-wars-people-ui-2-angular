import { TestBed } from '@angular/core/testing';

import { UrlUtilsService } from './url-utils.service';

describe('UrlUtilsService', () => {
  let service: UrlUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
