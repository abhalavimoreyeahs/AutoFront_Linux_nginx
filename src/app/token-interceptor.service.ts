import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AutoDialService } from './autoDialer.service';

@Injectable({
   providedIn: 'root'
   })

export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){ }

  intercept(req, next) {
    let serviceFarm = this.injector.get(AutoDialService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization :`${serviceFarm.getToken()}` //Read token
      }
    })
    return next.handle(tokenizedReq)
  }
}

//complete
