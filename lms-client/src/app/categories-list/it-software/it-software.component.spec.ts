import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSoftwareComponent } from './it-software.component';

describe('ItSoftwareComponent', () => {
  let component: ItSoftwareComponent;
  let fixture: ComponentFixture<ItSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
