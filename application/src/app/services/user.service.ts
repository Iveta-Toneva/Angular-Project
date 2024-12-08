import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$$ = new BehaviorSubject<User | null>(null);
  private user$ = this.user$$.asObservable();
  user: User | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.user$.subscribe(user => {
      this.user = user;
    });
  }


  login(email: string, password: string) {
    return this.http.post<User>('/api/users/login', { email, password }).pipe(tap(user => this.user$$.next(user)));
  }

  logout() {
    return this.http.get('/api/users/logout').pipe(tap(user => this.user$$.next(null)));
  }

  register(email: string, password: string, username: string) {
    return this.http.post<User>('/api/users/register', { email, password, username }).pipe(tap(user => this.user$$.next(user)));
  }

  getProfile() {
    return this.http.get<User>('/api/users/me').pipe(tap(user => this.user$$.next(user)));
  }

 
}
