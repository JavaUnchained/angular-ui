import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { OrderDTO } from '../model/orderdto';
import {Observable} from 'rxjs';
import {CurrentUserService} from '../model/current-user-service';
import {OrderResponseDTO} from '../model/order-responseDTO';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  id: number;
  clientUrl = 'http://localhost:8080/client/client_order';
  clientRefund = 'http://localhost:8080/client/refund';
  allOrderOperatorUrl = 'http://localhost:8080/operator/orders';
  constructor(private http: HttpClient, private modelService: CurrentUserService) {
    this.id = modelService.getCurrentId();
  }

  public makeOrder(order: OrderDTO): Observable<any> {
    const token = localStorage.getItem(String(this.id));
    console.log(token);
    console.log('Id in ration service is ' +  this.id);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<OrderDTO>(this.clientUrl, order, {headers});
  }

  public findAll(whoIS: string): Observable<OrderResponseDTO[]> {
    const token = localStorage.getItem(String(this.id));
    console.log(token);
    console.log('Id in ration service is ' +  this.id);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return whoIS === 'client' ? this.http.get<OrderResponseDTO[]>(this.clientUrl, {headers}) :
      this.http.get<OrderResponseDTO[]>(this.allOrderOperatorUrl, {headers});
  }

  public orderConfirmation(id: bigint): Observable<any> {
    const token = localStorage.getItem(String(this.id));
    console.log(token);
    console.log('Id in ration service is ' +  this.id);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<bigint>(this.allOrderOperatorUrl, id, {headers});
  }

  public makeRefund(id: bigint): Observable<any> {
    const token = localStorage.getItem(String(this.id));
    console.log(token);
    console.log('Id in ration service is ' +  this.id);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<OrderDTO>(this.clientRefund, id, {headers});
  }
}
