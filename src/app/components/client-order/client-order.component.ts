import { Component, OnInit } from '@angular/core';
import {OrderDTO} from '../../model/orderdto';
import {ActivatedRoute, Router} from '@angular/router';
import {RationService} from '../../services/ration-service.service';
import {OrderService} from '../../services/order.service';
import {Ration} from '../../model/ration';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.css']
})
export class ClientOrderComponent implements OnInit {
  order: OrderDTO;
  rations: Ration[] = [];

  constructor(private router: Router, private route: ActivatedRoute,
              private orderServices: OrderService, private rationService: RationService) {
    this.order = new OrderDTO();
  }

  ngOnInit(): void {
    this.rationService.findAllForClient().subscribe(data => {
      this.rations = data;
    });
  }

  onSubmit(): void {
    this.orderServices.makeOrder(this.order).subscribe(result => this.gotToOrderList());
  }

  gotToOrderList(): void {
    this.router.navigate(['/order_list']);
  }
}
