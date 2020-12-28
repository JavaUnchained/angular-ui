import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {OrderResponseDTO} from '../../model/order-responseDTO';

@Component({
  selector: 'app-operator-order',
  templateUrl: './operator-order.component.html',
  styleUrls: ['./operator-order.component.css']
})
export class OperatorOrderComponent implements OnInit {
  orders: OrderResponseDTO[] = [];
  constructor(private orderService: OrderService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.orderService.findAll('operator').subscribe(data => {
      this.orders = data;
    });
  }

  confirmOrder(id: bigint): void {
    this.orderService.orderConfirmation(id).subscribe(data => data);
    this.cdr.detectChanges();
  }
}
