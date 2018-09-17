import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dish} from '../models/Dish';
import {Order} from '../models/Order';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

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

  update(dish: Dish): Observable<Dish> {
    return this.http.put<Dish>('/api/dishes/' + dish.id, dish);
  }

  save(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>('/api/dishes', dish, httpOptions);
  }

}
