import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catalouge } from '../catalouge/catalouge';

@Injectable({
  providedIn: 'root'
})
export class CaricaturesService {

  constructor(private http: HttpClient) { }

  getCaricatures() {
    return this.http.get<Catalouge[]>('http://localhost:3030/data/caricatures');
  }


}
