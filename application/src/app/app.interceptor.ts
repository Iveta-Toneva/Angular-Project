import { HttpInterceptorFn } from '@angular/common/http';

const apiUrl = 'http://localhost:3030';
const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {

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

  return next(req);
};
