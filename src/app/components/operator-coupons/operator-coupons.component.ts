import {Component, OnInit} from '@angular/core';
import {CouponDTO} from '../../model/couponDTO';
import {CouponService} from '../../services/coupon.service';
import {CookCouponDTO} from '../../model/cook-coupon-dto';

@Component({
  selector: 'app-operator-coupons',
  templateUrl: './operator-coupons.component.html',
  styleUrls: ['./operator-coupons.component.css']
})
export class OperatorCouponsComponent implements OnInit {
  coupons: CookCouponDTO[] = [];
  constructor(private couponService: CouponService) { }

  ngOnInit(): void {
    this.couponService.getAllCoupons().subscribe(data => {
      this.coupons = data;
    });
  }

}
