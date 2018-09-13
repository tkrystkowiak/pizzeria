import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {LoginService} from './services/login.service';
import {Observable} from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isAuthenticated;
  }
}
