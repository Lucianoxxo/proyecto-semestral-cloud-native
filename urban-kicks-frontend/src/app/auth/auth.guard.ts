import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);

  if (auth.isLoggedIn()) return true;

  auth.login();
  return false;
};

export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const limpiarRol = (role: string) =>
    role
      .normalize('NFKC')
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      .trim()
      .toLowerCase();

  const required = (route.data?.['roles'] as string[] ?? [])
    .map(limpiarRol);

  const userRoles = auth.roles()
    .map(limpiarRol);

  const tienePermiso = required.some(role =>
    userRoles.includes(role)
  );

  if (tienePermiso) {
    return true;
  }

  router.navigateByUrl('/');
  return false;
};