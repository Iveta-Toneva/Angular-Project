import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CaricaturesService } from '../services/caricatures.service';
import { Caricature } from '../catalouge/caricature';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-list',
  imports: [DatePipe],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  constructor(private userService: UserService, private caricatureService: CaricaturesService, private route: Router) { }

  userId: string = ''
  orders: Caricature[] | null = null;

  ngOnInit(): void {
    this.userService.getProfile().subscribe(user => this.userId = user._id);

    this.caricatureService.getOrders().subscribe(data => this.orders = data);
  }

  onDelete(id: string) {
    this.caricatureService.deleteOrder(id).subscribe(() => {
      this.caricatureService.getOrders().subscribe(data => this.orders = data);
    });
  }

  edit(id: string) {
    this.route.navigate(['/edit', id]);
  }

}
