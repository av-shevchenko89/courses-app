import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ '../../shared/form.component.css', './login.component.css' ],
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.login);
  }
}
