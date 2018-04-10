import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService : AuthService, private dateparser : NgbDateParserFormatter) { }

  ngOnInit() {
  }
  model;

  register(details){
    let myDate = this.dateparser.format(details.dp);
    let registerDetails = { 
      child_first_name : details.chdfn, 
      child_last_name : details.chdln,
      address : details.address,
      city : details.city,
      year : details.year,
      birthday : myDate,
      parent_first_name : details.parentfn,
      parent_last_name : details.parentln,
      phn_num : details.phnnum,
      email : details.email
      };
    
    
      console.log(registerDetails);
    this.authService.register(registerDetails).subscribe(response => {
      console.log(response);
    });
  }

}
