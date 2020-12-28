import { Component, OnInit } from '@angular/core';
import {UserRegistrationDTO} from '../../model/userregistrationdto';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: UserRegistrationDTO;
  color = '#fff';
  iscliced = false;
  clickedText = 'Registered';
  n: string;
  surname: string;
  password: string;
  username: string;
  phoneNumber: string;
  account: number;
  constructor(public loginService: LoginService) {}

  ngOnInit(): void {
    this.iscliced = false;
    this.color = '#fff';
  }
  registered(): void {
    this.iscliced = !this.iscliced;
    this.clickedText = 'complete';
    this.color = '#9aec74';
    this.user = new UserRegistrationDTO(this.username, this.password, this.n, this.surname, this.phoneNumber, this.account);
    this.loginService.registerUser(this.user);
  }
}
