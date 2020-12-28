import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RationService} from '../../services/ration-service.service';
import {Ration} from '../../model/ration';
import {ClientService} from '../../services/client.service';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-client-refaund',
  templateUrl: './client-refaund.component.html',
  styleUrls: ['./client-refaund.component.css']
})
export class ClientRefaundComponent implements OnInit {

  id: bigint;
  message: string;

  constructor(private router: Router, private route: ActivatedRoute, private orderService: OrderService) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Thanks for you feedback. We will improve it.');
    this.orderService.makeRefund(this.id).subscribe(data => this.gotoRationList());
  }

  gotoRationList(): void {
    this.router.navigate(['/order_list']);
  }

}
