import {Component, OnInit} from '@angular/core';
import {OrderResponseDTO} from '../../model/order-responseDTO';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  orders: OrderResponseDTO[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.findAll('client').subscribe(data => {
      this.orders = data;
    });
  }
}
