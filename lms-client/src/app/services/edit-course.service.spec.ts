import { TestBed } from '@angular/core/testing';

import { EditCourseService } from './edit-course.service';

describe('EditCourseService', () => {
  let service: EditCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
