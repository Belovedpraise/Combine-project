import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCoursesYetComponent } from './no-courses-yet.component';

describe('NoCoursesYetComponent', () => {
  let component: NoCoursesYetComponent;
  let fixture: ComponentFixture<NoCoursesYetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCoursesYetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCoursesYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
