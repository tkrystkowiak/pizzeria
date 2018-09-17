import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Order} from '../models/Order';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  statusList = ['In preparation', 'In delivery', 'Delivered', 'Cancelled'];

  constructor(private http: HttpClient) {

  }

  save(order: Order): Observable<Order> {
    return this.http.post<Order>('/api/orders', order, httpOptions);
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>('/api/orders');
  }

  getOne(id: number): Observable<Order> {
    return this.http.get<Order>('/api/orders/' + id);
  }

  deleteOne(id: number): Observable<Order> {
    return this.http.delete<Order>('/api/orders/' + id);
  }

  getStatusList(): string[] {
    return this.statusList;
  }

  updateOne(order: Order): Observable<Order> {
    return this.http.put<Order>('/api/orders/' + order.id, order, httpOptions);
  }
}
