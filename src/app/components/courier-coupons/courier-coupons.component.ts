import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CouponService} from '../../services/coupon.service';
import {CourierCouponDTO} from '../../model/courier-coupon-dto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courier-coupons',
  templateUrl: './courier-coupons.component.html',
  styleUrls: ['./courier-coupons.component.css']
})
export class CourierCouponsComponent implements OnInit {
  coupons: CourierCouponDTO[] = [];
  constructor(private couponService: CouponService, private cdr: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit(): void {
    this.couponService.getCouponsForCourier().subscribe(data => {
      this.coupons = data;
    });
  }

  doneCoupon(id: bigint): void {
    this.couponService.couponDone(id, 'courier').subscribe(data => this.ngOnInit());
  }

  gotToOrderList(): void {
    this.cdr.detectChanges();
  }
}
