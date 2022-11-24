import { TestBed } from '@angular/core/testing';

import { AddResourcesService } from './add-resources.service';

describe('AddResourcesService', () => {
  let service: AddResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
