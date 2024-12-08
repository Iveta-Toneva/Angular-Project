import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from './error/error.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

const apiUrl = 'http://localhost:3030';
const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {

  const errorService = inject(ErrorService);
  const router = inject(Router);

  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, apiUrl)
    });
  }

  const token = localStorage.getItem('accessToken');
  if ((req.method === 'Get' && req.url.includes('logout'))) {
    return next(req);
  } else if (token) {
    req = req.clone({
      setHeaders: {
        'X-Authorization': token
      }
    })
  }

  return next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        router.navigate(['/login']);
      } else if (error.status === 403) {
        localStorage.clear();
      }
      else {
        errorService.setError(error);
        router.navigate(['/error'])
      }
      return throwError(() => error);
    })
  )
};
