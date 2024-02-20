import { TestBed } from '@angular/core/testing';

import { CardBookingService } from './card-booking.service';

describe('CardBookingService', () => {
  let service: CardBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
