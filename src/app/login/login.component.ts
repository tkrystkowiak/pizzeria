import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: string;
  password: string;

  constructor(public loginService: LoginService) {
    this.login = '';
    this.password = '';

  }

  ngOnInit() {
  }

  onSubmit(): void {

    this.loginService.authenticate(this.login).subscribe(users => {
      users.forEach(user => {
        if (user.password === this.password) {
          this.loginService.login();
        }
      });
    });

  }

}
