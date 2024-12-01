import { Component, OnInit } from '@angular/core';
import { CaricaturesService } from '../services/caricatures.service';
import { Catalouge } from './catalouge';

@Component({
  selector: 'app-catalouge',
  imports: [],
  templateUrl: './catalouge.component.html',
  styleUrl: './catalouge.component.css'
})
export class CatalougeComponent implements OnInit {

  catalouge: Catalouge[] | null = null;
  constructor(private caricatureService: CaricaturesService) { }
  ngOnInit(): void {
    this.caricatureService.getCaricatures().subscribe(data => {
      this.catalouge = data;
    })
  }
}
