import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AuthRequestDTO} from '../model/authrequestdto';
import {UserRegistrationDTO} from '../model/userregistrationdto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authRequest: AuthRequestDTO;

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    console.log('try login', username);
    this.authRequest = new AuthRequestDTO(username, password);
    return this.http.post('http://localhost:8080/auth', this.authRequest, {responseType: 'text' as 'json'});
  }

  public registerUser(client: UserRegistrationDTO): void {
    this.http.post('http://localhost:8080/registration', client)
      .subscribe(data => {});
  }
}
