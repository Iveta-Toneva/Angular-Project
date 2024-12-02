import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|bg)+/gm))]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  loginHandler() {
    console.log(this.form.valid);
  }
}
