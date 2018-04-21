import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Injectable()
export class AuthGuard implements CanActivate {

  
  
  constructor(private router : Router, private authService : AuthService) { }

  canActivate() {
    if (this.authService.isLoggedIn()){
      console.log("status :" + this.authService.isLoggedIn());
      return true;
    }
    else {
      console.log("status :" + this.authService.isLoggedIn());
      this.router.navigate(['/login']);
      return false;
    }
  }
}
