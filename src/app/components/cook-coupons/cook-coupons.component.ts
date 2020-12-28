import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CouponService} from '../../services/coupon.service';
import {CookCouponDTO} from '../../model/cook-coupon-dto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cook-coupons',
  templateUrl: './cook-coupons.component.html',
  styleUrls: ['./cook-coupons.component.css']
})
export class CookCouponsComponent implements OnInit {
  coupons: CookCouponDTO[] = [];
  constructor(private couponService: CouponService, private cdr: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit(): void {
    this.couponService.getAllCouponsForCook().subscribe(data => {
      this.coupons = data;
    });
  }

  doneCoupon(id: bigint): void {
    this.couponService.couponDone(id, 'cook').subscribe(data => this.ngOnInit());
  }
  gotToOrderList(): void {
    this.cdr.detectChanges();
  }
}
