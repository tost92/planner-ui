import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
<<<<<<< HEAD
  HttpErrorResponse,
=======
  HttpErrorResponse
>>>>>>> 34b9560b7a976a6b617841ee0d39f66c6dc851fd
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    //console.log('token from interceptor ', token);

    if (token) {
      //console.log('token case ');
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('Errore client side');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('Errore server side');
          errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
          //se facendo una chiamata ho un errore di autenticazione che arriva dal server, faccio il logout
          if (error.status == 403) {
            console.log('Catch error ', error.status);
            this.authService.logout();
          }
        }
        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
