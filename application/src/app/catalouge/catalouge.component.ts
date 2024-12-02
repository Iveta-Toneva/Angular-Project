import { Component, OnInit } from '@angular/core';
import { CaricaturesService } from '../services/caricatures.service';
import { Caricature } from './caricature';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalouge',
  imports: [],
  templateUrl: './catalouge.component.html',
  styleUrl: './catalouge.component.css'
})
export class CatalougeComponent implements OnInit {

  catalouge: Caricature[] | null = null;
  constructor(private caricatureService: CaricaturesService, private router: Router) { }
  ngOnInit(): void {
    this.caricatureService.getCaricatures().subscribe(data => {
      this.catalouge = data;
    })
  }
  loadDetails(id: string): void {
    this.caricatureService.getSingleCaricature(id).subscribe(caricature => {
      this.router.navigate(['/catalouge/', id]);
    })
  }
}
