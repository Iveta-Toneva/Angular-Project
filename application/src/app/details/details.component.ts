import { Component, OnInit } from '@angular/core';
import { CaricaturesService } from '../services/caricatures.service';
import { ActivatedRoute } from '@angular/router';
import { Caricature } from '../catalouge/caricature';
import { UpperCasePipe } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details',
  imports: [UpperCasePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  userId = '';
  likes = 0;
  caricature: Caricature | null = null;
  get isLogged() {
    return this.userService.isLogged;
  }

  constructor(private caricatureService: CaricaturesService,
    private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.caricatureService.getSingleCaricature(id).subscribe(data => {
      this.caricature = data;
    })

    if (localStorage.getItem('accessToken')) {
      this.userService.getProfile().subscribe(user => {
        this.userId = user._id;
      })
    }

    this.caricatureService.getLikes(id).subscribe((likes) => {
      this.likes = Object.keys(likes).length;
    });
  }

  like(id: string) {
    this.caricatureService.getLikes(id).subscribe((likes) => {
      const isLiked = Object.values(likes).some(like => like._ownerId === this.userId);
      if (isLiked) {
        return;
      } else {
        this.caricatureService.like(id).subscribe(() => {
          this.caricatureService.getLikes(id).subscribe((likes) => {
            this.likes = Object.keys(likes).length;
          });
        })
      }
    })
  }


}

