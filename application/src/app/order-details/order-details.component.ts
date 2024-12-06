import { Component, OnInit } from '@angular/core';
import { Caricature } from '../catalouge/caricature';
import { CaricaturesService } from '../services/caricatures.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-order-details',
  imports: [UpperCasePipe, DatePipe],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {

  order: Caricature | null = null;
  id = '';

  constructor(private caricatureService: CaricaturesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.caricatureService.getSingleOrder(this.id).subscribe(order => {
      this.order = order;
    })
  }

  
}
