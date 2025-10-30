import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  if (!authService.userState().isLoggedIn) {
    const router = inject(Router);
    router.navigateByUrl('/login');

    return false;
  }
  return true;
};
