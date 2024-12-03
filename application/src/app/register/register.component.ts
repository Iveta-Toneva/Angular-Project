import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com|bg)+/gm))]),
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repeatPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  registerHandler() {

    if (this.form.invalid) {
      return;
    }

    const { email, password, username } = this.form.value;
    this.userService.register(email!, username!, password!).subscribe((data) => {
      localStorage.setItem('accessToken', data.accessToken);
      this.router.navigate(['/catalouge']);
    });
  }
}
