import { TestBed } from '@angular/core/testing';

import { FireCrudService } from './fire-crud.service';

describe('FireCrudService', () => {
  let service: FireCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
