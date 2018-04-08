import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private invalidLogin : boolean;
  constructor(
    private router: Router,
    private authservice: AuthService
  ) {
    this.invalidLogin = false;
   }

  ngOnInit() {
  }

  signIn(credentials) {
    
    this.authservice.login(credentials).subscribe(response =>{
      if (response){
        this.router.navigate(['/']);
      }
      else {
        this.invalidLogin = true;
      }
    });
    console.log(credentials);
  }

  

}
