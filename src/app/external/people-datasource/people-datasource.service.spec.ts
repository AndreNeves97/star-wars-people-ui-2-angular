import { TestBed } from '@angular/core/testing';

import { PeopleDatasourceService } from './people-datasource.service';

describe('PeopleDatasourceService', () => {
  let service: PeopleDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
