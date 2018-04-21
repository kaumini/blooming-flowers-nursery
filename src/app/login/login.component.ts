import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  message : string;
  constructor(
    private router: Router,
    private authservice: AuthService,
    private route: ActivatedRoute) {
    this.invalidLogin = false;
    let returnurl = this.route.snapshot.queryParamMap.get("returnUrl");
    if (returnurl){
      this.invalidLogin = true;
      this.message = 'You have to login first';
    }
  }

  ngOnInit() {
  }

  signIn(credentials) {

    this.authservice.login(credentials).subscribe(response => {
      if (response) {
        let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
        let action = this.route.snapshot.queryParamMap.get("action");
        let uri_dec = decodeURIComponent(returnUrl);
        console.log(uri_dec);
        if (returnUrl){
          console.log("gsfgsfg")
          this.router.navigateByUrl(uri_dec);
        } 
        else {
           this.router.navigate(['/']);
        }
       
      }
      else {
        this.invalidLogin = true;
        this.message = 'Invalid email or password';
      }
    });
    console.log(credentials);
  }



}
