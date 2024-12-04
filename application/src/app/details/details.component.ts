import { Component, OnInit } from '@angular/core';
import { CaricaturesService } from '../services/caricatures.service';
import { ActivatedRoute } from '@angular/router';
import { Caricature } from '../catalouge/caricature';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  caricature: Caricature | null = null;
  constructor(private caricatureService: CaricaturesService,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.caricatureService.getSingleCaricature(id).subscribe(data => {
      this.caricature = data;
    })
  }

}
