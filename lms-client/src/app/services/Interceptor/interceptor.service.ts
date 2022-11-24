import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { AuthService } from '../Auth/auth.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(
    private Auth: AuthService,
  ) { }

    public message = ''

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let token = localStorage.Auth;
    req = req.clone( {headers: req.headers.set('Authorization', 'Bearer ' + token )});
    req = req.clone( {headers: req.headers.set('Content-Type', 'application/json' )});
    req = req.clone({ headers: req.headers.set('Accept', 'application/json' )});

    return next.handle(req)
    .pipe(catchError((err: HttpErrorResponse)=> {
      if(err) {
        this.Auth.signOut();
        // console.log(err);
        // this.openSnackBar(this.message, 'Error occurred please try again');
      }
      return throwError(err);
    }))
  }

  // openSnackBar(message: string, panelClass: string) {
  //   this.snackBar.openFromComponent(SnackBarComponent, {
  //     data: message,
  //     panelClass: panelClass,
  //     duration: 10000
  //   })
  // }
}
