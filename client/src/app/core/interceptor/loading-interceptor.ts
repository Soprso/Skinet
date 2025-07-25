import { HttpInterceptorFn } from '@angular/common/http';
import { delay, finalize } from 'rxjs';
import { BusyService } from '../services/busy.service';
import { inject } from '@angular/core';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const busyService = inject(BusyService);

   busyService.busy(); // ✅ Track start of request
  return next(req).pipe(
    delay(650),
    finalize(() => busyService.idle())
  )
};
