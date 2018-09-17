import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import {CartService} from './services/cart.service';

@Injectable()
export class CartGuard implements CanActivate {
  constructor(private readonly cartService: CartService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.cartService.getCart().length === 0;
  }
}
