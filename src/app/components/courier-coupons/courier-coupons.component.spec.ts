import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierCouponsComponent } from './courier-coupons.component';

describe('CourierCouponsComponent', () => {
  let component: CourierCouponsComponent;
  let fixture: ComponentFixture<CourierCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourierCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourierCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
