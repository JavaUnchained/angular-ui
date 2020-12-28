import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CurrentUserService} from '../model/current-user-service';
import {Observable} from 'rxjs';
import {CouponDTO} from '../model/couponDTO';
import {CookCouponDTO} from '../model/cook-coupon-dto';
import {CourierCouponDTO} from '../model/courier-coupon-dto';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  id: number;
  getAllOperatorCoupons = 'http://localhost:8080/operator/operator_coupons';
  getAllCookCoupons = 'http://localhost:8080/cook/cook_coupons';
  getCourierCoupons = 'http://localhost:8080/courier/coupons';
  constructor(private http: HttpClient, private modelService: CurrentUserService) {
    this.id = modelService.getCurrentId();
  }

  public getAllCoupons(): Observable<CouponDTO[]> {
    const token = localStorage.getItem(String(this.id));
    console.log(token);
    console.log('Id in ration service is ' +  this.id);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<CouponDTO[]>(this.getAllOperatorCoupons, {headers});
  }

  public getAllCouponsForCook(): Observable<CookCouponDTO[]> {
    const token = localStorage.getItem(String(this.id));
    console.log(token);
    console.log('Id in ration service is ' +  this.id);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<CookCouponDTO[]>(this.getAllCookCoupons, {headers});
  }

  public getCouponsForCourier(): Observable<CourierCouponDTO[]> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem(String(this.id)));
    return this.http.get<CourierCouponDTO[]>(this.getCourierCoupons, {headers});
  }

  public couponDone(id: bigint, person: string): Observable<any> {
    const token = localStorage.getItem(String(this.id));
    console.log('Id in ration service is ' +  this.id);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return person === 'cook' ? this.http.post<bigint>(this.getAllCookCoupons, id, {headers}) :
      this.http.post<bigint>(this.getCourierCoupons, id, {headers});
  }
}
