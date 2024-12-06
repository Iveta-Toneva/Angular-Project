import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CaricaturesService } from '../services/caricatures.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  imports: [ReactiveFormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  constructor(private router: Router, private caricatureService: CaricaturesService) { }

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  })

  price: string = '0';

  orderHandler() {

    if (this.form.invalid) {
      return;
    }

    const { title, username, description, img} = this.form.value;


    this.caricatureService.placeOrder(title!, username!, description!, img!, this.price).subscribe((data) => {
      this.router.navigate(['/orderList']);
    })

  }

}
