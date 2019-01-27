import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { AppComponent } from '.././app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor(public loginService: LoginService,
    public location: Location,
    private appComponent: AppComponent) { }

  login(direct) {
    console.log(`email : ${this.email.value}`);
    console.log(`password : ${this.password.value}`);
    this.loginService.getAuthen(direct);
    this.appComponent.isLoggedIn = true;
    if (this.email.value !== '') {
      this.appComponent.name = this.email.value;
    }
    this.goBack();
  }

  goBack() {
    this.location.back();
  }
  ngOnInit() {
  }

}
