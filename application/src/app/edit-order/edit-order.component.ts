import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaricaturesService } from '../services/caricatures.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Caricature } from '../catalouge/caricature';

@Component({
  selector: 'app-edit-order',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-order.component.html',
  styleUrl: './edit-order.component.css'
})
export class EditOrderComponent implements OnInit {

  constructor(private route: ActivatedRoute, private caricatureService: CaricaturesService, private router: Router) { }
  order: Caricature | null = null;
  id = '';
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.caricatureService.getSingleOrder(this.id).subscribe(data => {
      const { title, username, description, img } = data;
      this.form.setValue({
        title, username, description, img
      })
    });

  }

  editHandler() {

    if (this.form.invalid) {
      return;
    }

    const { title, username, description, img } = this.form.value;

    this.caricatureService.editOrder(this.id, title!, username!, description!, img!).subscribe(() => {
      this.router.navigate(['/orderList']);
    })

  }

}
