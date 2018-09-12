import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isAuthenticated = false;

  constructor(private http: HttpClient) { }

  authenticate(login: string): Observable<User[]> {
    return this.http.get<User[]>('/api/users?login=' + login);
  }

  login(): void {
    this.isAuthenticated = true;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
