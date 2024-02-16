import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpaComponent } from './card-spa.component';

describe('CardSpaComponent', () => {
  let component: CardSpaComponent;
  let fixture: ComponentFixture<CardSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
