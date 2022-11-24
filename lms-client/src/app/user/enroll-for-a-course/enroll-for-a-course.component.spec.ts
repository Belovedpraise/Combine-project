import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollForACourseComponent } from './enroll-for-a-course.component';

describe('EnrollForACourseComponent', () => {
  let component: EnrollForACourseComponent;
  let fixture: ComponentFixture<EnrollForACourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollForACourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollForACourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
