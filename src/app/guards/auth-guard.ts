import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn: boolean = true; // JWT ile entegrasyon.

  if (!isLoggedIn) {
    const router = inject(Router);
    router.navigateByUrl('/login');

    return false;
  }
  return true;
};
