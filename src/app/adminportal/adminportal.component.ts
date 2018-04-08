import { DataService } from './../data.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {

  private category : string;
  private hasStudentDetails : boolean = true;
  model: NgbDateStruct;
  
  constructor(private route : ActivatedRoute, private dataService : DataService) { 
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
  }

  ngOnInit() {
  }

  private child_first_name : string;
  private child_last_name : string;
  private address : string;



  menu = [
    {name : 'Dashboard', key: 'dashboard'},
    {name : 'Student Details', key: 'studentdetails'},
    {name : 'Career Applications', key: 'careerapplications'},
    {name : 'Teacher Leave Applications', key: 'teacherleaveapply'},
    {name : 'Main noticeboard', key : 'mainnoticeboard'},
    {name : 'New Admissions', key : 'newadmissions' },
    {name : 'Portal User Accounts', key : 'portaluseraccounts'}
  ];
  private student_data = {};
  getStudentData(studentId){
    let data;
    console.log(studentId);
    this.dataService.getStudentData(studentId).subscribe(response => {
        console.log(response);
        this.child_first_name = response.child_first_name;
        this.child_last_name = response.child_last_name;
        this.address = response.address;
        this.model =  {year:2011 , month : 10, day : 12};

        
    });
    /* let registerDetails = { 
      child_first_name : details.chdfn, 
      child_last_name : details.chdln,
      address : details.address,
      city : details.city,
      year : details.year,
      birthday : details.birthday,
      parent_first_name : details.parentfn,
      parent_last_name : details.parentln,
      phn_num : details.phnnum,
      email : details.email
      }; */
      if (data){
        console.log(data);
      }
      
  }

  
  

}
