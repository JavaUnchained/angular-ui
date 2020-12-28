export class CouponDTO {
  constructor(
    public id: bigint,
    public name: string,
    public couponStatusEnum: string,
    public address: string,
    public shippingDate: string,
  ) {
  }
}
