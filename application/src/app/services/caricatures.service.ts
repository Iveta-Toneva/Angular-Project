import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Caricature } from '../catalouge/caricature';

@Injectable({
  providedIn: 'root'
})
export class CaricaturesService {

  constructor(private http: HttpClient) { }

  getCaricatures() {
    return this.http.get<Caricature[]>('http://localhost:3030/data/caricatures');
  }

  getSingleCaricature(id: string) {
    return this.http.get<Caricature>(`http://localhost:3030/data/caricatures/${id}`);
  }


}
