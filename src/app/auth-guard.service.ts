import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router : Router, private authService : AuthService) { }

  canActivate(route, state : RouterStateSnapshot) {
    
    var uri_enc = encodeURIComponent(state.url);
    var uri_dec = decodeURIComponent(uri_enc);

    if (this.authService.isLoggedIn()){
      return true;
    }
    else {
      this.router.navigate(['/login'],{queryParams : {returnUrl : uri_dec}});
      return false;
    }
  }
}
