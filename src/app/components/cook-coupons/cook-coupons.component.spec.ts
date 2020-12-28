import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookCouponsComponent } from './cook-coupons.component';

describe('CookCouponsComponent', () => {
  let component: CookCouponsComponent;
  let fixture: ComponentFixture<CookCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
