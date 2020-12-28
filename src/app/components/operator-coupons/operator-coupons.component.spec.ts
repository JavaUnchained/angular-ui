import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorCouponsComponent } from './operator-coupons.component';

describe('OperatorCouponsComponent', () => {
  let component: OperatorCouponsComponent;
  let fixture: ComponentFixture<OperatorCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
