import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaPageComponent } from './spa-page.component';

describe('SpaPageComponent', () => {
  let component: SpaPageComponent;
  let fixture: ComponentFixture<SpaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
