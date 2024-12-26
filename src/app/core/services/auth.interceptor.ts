import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { UserService } from './user.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Use Angular's inject() to get an instance of UserService
  const userService = inject(UserService);

  // Build the Authorization header
  const guidAuthHeader = `Basic ${btoa(
    `${userService.usercreds.username}:${userService.usercreds.password}`
  )}`;

  // Clone the request and add the Authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: guidAuthHeader,
    },
  });

  // Pass the modified request to the next handler
  return next(authReq);
};
