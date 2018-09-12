import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from '../models/Dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(readonly http: HttpClient) {
  }

  getDrinks(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes?type=drink');
  }

  getPastas(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes?type=pasta');
  }

  getPizzas(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes?type=pizza');
  }

  getDish(id: number): Observable<Dish> {
    return this.http.get<Dish>('/api/dishes/' + id);
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>('/api/dishes');
  }

}
