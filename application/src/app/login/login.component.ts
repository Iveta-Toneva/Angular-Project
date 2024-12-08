import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorMessage = '';
  constructor(private userService: UserService, private router: Router) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|bg)+/gm))]),
    password: new FormControl('', [Validators.required]),
  })

  loginHandler() {

    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;

    this.userService.login(email!, password!).subscribe({
      next: (user) => {
        localStorage.setItem('accessToken', user.accessToken);
        this.router.navigate(['/catalouge']);
      }, error: (error) => {
        this.errorMessage = error.error.message;
      }
    });

  }
}
