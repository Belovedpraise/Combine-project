import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBestComponent } from './our-best.component';

describe('OurBestComponent', () => {
  let component: OurBestComponent;
  let fixture: ComponentFixture<OurBestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
