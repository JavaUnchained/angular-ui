import { Component, OnInit } from '@angular/core';
import {Login} from '../../model/login';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../model/current-user-service';
import {AuthResponseDTO} from '../../model/authresponsedto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // login: Login;
  auth: AuthResponseDTO;
  password: string;
  username: string;
  isLogin = false;
  isRegistr = false;
  constructor(private loginService: LoginService, private router: Router, private currentUserService: CurrentUserService) {
  }

  ngOnInit(): void {
  }

  doLogin(): void {
    this.loginService.login(this.username, this.password).subscribe(data => {
      this.auth = JSON.parse(data);
      const jwt = this.auth.jwt;
      const role = this.auth.role;
      const id = this.auth.id;
      console.log('data = ', data);
      console.log(jwt);
      console.log(role);
      console.log(id);
      localStorage.setItem(String(id), jwt);
      this.currentUserService.setCurrentId(id);
      console.log('In the current user service id = ', this.currentUserService.getCurrentId());
      if (role !== null && (role === 'ROLE_CLIENT' || role === 'ROLE_COOK' || role === 'ROLE_COURIER' || role === 'ROLE_OPERATOR')) {
        this.isLogin = true;
      }
    });
  }

  registration(): void {
    this.isRegistr = !this.isRegistr;
  }
}
