import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caricature } from '../catalouge/caricature';
import { filter } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CaricaturesService {

  constructor(private http: HttpClient) { }

  getCaricatures() {
    return this.http.get<Caricature[]>('/api/data/caricatures');
  }

  getSingleCaricature(id: string) {
    return this.http.get<Caricature>(`/api/data/caricatures/${id}`);
  }

  placeOrder(title: string, description: string, image: string, price: string) {
    return this.http.post<Caricature>(`/api/data/customCaricatures`, { title, description, image, price });
  }

  getOrders() {
    return this.http.get<Caricature[]>('/api/data/customCaricatures');
  }

  deleteOrder(id: string) {
    return this.http.delete<Caricature>(`/api/data/customCaricatures/${id}`);
  }




}
