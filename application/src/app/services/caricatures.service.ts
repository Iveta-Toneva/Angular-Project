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


}
