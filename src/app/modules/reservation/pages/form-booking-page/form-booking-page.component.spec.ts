import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBookingPageComponent } from './form-booking-page.component';

describe('FormBookingPageComponent', () => {
  let component: FormBookingPageComponent;
  let fixture: ComponentFixture<FormBookingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBookingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
