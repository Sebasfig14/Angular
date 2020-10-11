import { SecurityService } from './security.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { nextTick } from 'process';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private security: SecurityService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenreq =  req.clone({
    setHeaders:{
      'access-token' : 'Bearer ' + this.security.getToken()
    }
  });

    return next.handle(tokenreq);



  }
}
