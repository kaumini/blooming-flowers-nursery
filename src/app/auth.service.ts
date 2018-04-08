import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http : Http) { }

  login(credentials){
    return this.http.post('http://localhost:3000/users/login',credentials)
    .map(response => {
      let result = response.json();
      console.log(result);
      if (result.error===0 && result.token){ 
        localStorage.setItem('token',result.token);
        return true;
      } 
      console.log(false);
      return false;
    });
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    return tokenNotExpired();
  }

  get currentUsername(){
    let token = localStorage.getItem('token');
    if (!token){
      return null;
    }
    else {
      let jwthelper = new JwtHelper();
      let name = jwthelper.decodeToken(token).payload.firstname.concat(' ').concat(jwthelper.decodeToken(token).payload.lastname);
      return name;
    }
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    let jwthelper = new JwtHelper();
    return jwthelper.decodeToken(token).payload;
  }
  
  register(data){
    return this.http.post("http://localhost:3000/api/newapplication",data).map(response => {
      if (response){
        console.log(response);
        return true;
      }
      else{
        return false;
      }
    })
  }
}
