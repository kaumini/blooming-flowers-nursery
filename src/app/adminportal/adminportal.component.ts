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

  category : string;
  private hasStudentDetails : boolean = true;
  model: NgbDateStruct;
  fileToUpload: File = null;

  
  constructor(private route : ActivatedRoute, private dataService : DataService) { 
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
  }

  ngOnInit() {
  }

  child_first_name : string;
  child_last_name : string;
  address : string;
  parent_first_name : string;
  parent_last_name : string;
  city : string;
  year : string;
  phn_num : string;
  email : string;
  birthday : Date;

  menu = [
    {name : 'Dashboard', key: 'dashboard'},
    {name : 'Student Details', key: 'studentdetails'},
    {name : 'Career Applications', key: 'careerapplications'},
    {name : 'Teacher Leave Applications', key: 'teacherleaveapply'},
    {name : 'New Admissions', key : 'newadmissions' },
    {name : 'Portal User Accounts', key : 'portaluseraccounts'}
  ];

  private student_data = {};
  getStudentData(studentId){

    console.log(studentId);
    this.dataService.getStudentData(studentId).subscribe(response => {
        console.log(response);
        this.child_first_name = response.child_first_name;
        this.child_last_name = response.child_last_name;
        this.address = response.address;
        this.parent_first_name = response.parent_first_name;
        this.parent_last_name = response.parent_last_name;
        this.email = response.email;
        this.phn_num = response.phn_num;
        this.city = response.city;
        this.year = response.year;
        this.birthday = response.birthday;
        console.log(this.birthday);
        const now = new Date(this.birthday);
        this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
        console.log(this.model);
    });
      
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.dataService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }

}
