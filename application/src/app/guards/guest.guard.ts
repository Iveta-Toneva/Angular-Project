import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  if (!localStorage.getItem('accessToken')) {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }

};
