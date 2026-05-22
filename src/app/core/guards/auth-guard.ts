import {
  inject
} from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

import {
  AuthService
} from '../services/auth';

export const authGuard: CanActivateFn = () => {

  const authService =
    inject(AuthService);

  const router =
    inject(Router);

  /* AUTH CHECK */
  if (
    authService.isAuthenticated()
  ) {

    return true;

  }

  /* REDIRECT LOGIN */
  router.navigate(['/login']);

  return false;

};