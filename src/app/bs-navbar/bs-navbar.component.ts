import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

  isLoggedIn(){
    console.log(this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
  }
  navigateToPortal(){
    if (this.authService.currentUser.type === 'admin'){
        this.router.navigate(['/portal/admin'],{queryParams : {category : 'dashboard'}});
    }
    else if (this.authService.currentUser.type === 'parent'){
      this.router.navigate(['/portal/parent'],{queryParams : {category : 'noticeboard'}});
    }
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }



}
