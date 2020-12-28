import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Ration} from '../model/ration';
import {observable, Observable} from 'rxjs';
import { CurrentUserService } from '../model/current-user-service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RationService {
  id: number;
  private readonly usersUrl: string;
  private readonly deleteurl: string;
  private readonly clientRation: string;

  constructor(private http: HttpClient, private modelService: CurrentUserService) {
    this.usersUrl =  'http://localhost:8080/operator/rations';
    this.deleteurl = 'http://localhost:8080/operator/deleterations';
    this.clientRation = 'http://localhost:8080/client/rations';
    this.id = modelService.getCurrentId();
  }

  public findAll(): Observable<Ration[]> {
    const token = localStorage.getItem(String(this.id));
    console.log(token);
    console.log('Id in ration service is ' +  this.id);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Ration[]>(this.usersUrl, {headers});
  }

  public delete(ids: bigint[]): Observable<any> {
    const token = localStorage.getItem(String(this.id));
    console.log(token);
    console.log('Id in ration delete is ' + ids);
    console.log(JSON.stringify(ids));
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<bigint[]>(this.deleteurl,  ids, {headers})
      .pipe(catchError(async (data) => console.error(data)));
  }

  // tslint:disable-next-line:typedef
  public save(ration: Ration) {
    const token = localStorage.getItem(String(this.id));
    console.log(token);
    console.log('Id in ration service is ' +  this.id);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post<Ration>(this.usersUrl, ration, {headers});
  }

  public findAllForClient(): Observable<Ration[]> {
    const token = localStorage.getItem(String(this.id));
    console.log('Id in ration service is ' +  this.id);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<Ration[]>(this.clientRation, {headers});
  }
}
