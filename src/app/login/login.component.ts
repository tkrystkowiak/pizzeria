import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  login: string;
  password: string;
  private readonly destroy$ = new Subject();

  constructor(public loginService: LoginService) {
    this.login = '';
    this.password = '';
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    this.loginService.authenticate(this.login)
      .pipe(takeUntil(this.destroy$)).subscribe(users => {
      users.forEach(user => {
        if (user.password === this.password) {
          this.loginService.login();
        }
      });
    });

  }

}
