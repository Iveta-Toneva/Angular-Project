import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  constructor(private userService: UserService, private router: Router) { }

  logout() {
    this.userService.logout().subscribe(() => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
    })
  }
}
