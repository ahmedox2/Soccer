import type { CanActivateFn } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  return true;
};
