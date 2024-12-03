import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.getProfile().subscribe(user => { });
  }
}
