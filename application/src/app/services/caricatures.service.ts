import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caricature } from '../catalouge/caricature';

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

  placeOrder(title: string, username: string, description: string, img: string, price: string) {
    return this.http.post<Caricature>(`/api/data/customCaricatures`, { title, username, description, img, price });
  }

  getOrders() {
    return this.http.get<Caricature[]>('/api/data/customCaricatures');
  }

  deleteOrder(id: string) {
    return this.http.delete<Caricature>(`/api/data/customCaricatures/${id}`);
  }

  getSingleOrder(id: string) {
    return this.http.get<Caricature>(`/api/data/customCaricatures/${id}`);
  }

  editOrder(id: string, title: string, username: string, description: string, img: string) {
    return this.http.put<Caricature>(`/api/data/customCaricatures/${id}`, { title, username, description, img });
  }

  like(caricaturesId: string) {
    return this.http.post('/api/data/likes', { caricaturesId });
  }

  getLikes(id: string) {
    return this.http.get(`/api/data/likes?where=caricaturesId%3D${id}`);
  }

}
