// src/app/auth.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // SSR-safe token access
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const excludedUrls = ['/l', '/rer'];
  if (excludedUrls.some(url => req.url.includes(url))) {
    return next(req);
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const cloned = req.clone({ setHeaders: headers });
  return next(cloned);
};
