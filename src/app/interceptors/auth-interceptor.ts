import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const jwt = localStorage.getItem("token");

  if(jwt)
  {
    const request = req.clone({setHeaders: {Authorization: `Bearer ${jwt}`}})
    return next(request);
  }

  return next(req);
};
