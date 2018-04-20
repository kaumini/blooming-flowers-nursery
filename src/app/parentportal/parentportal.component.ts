import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parentportal',
  templateUrl: './parentportal.component.html',
  styleUrls: ['./parentportal.component.css']
})
export class ParentportalComponent implements OnInit {

  category : string;
  notices = [];
  success = false;

  constructor(private route : ActivatedRoute, private dataService : DataService) { 
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
    this.dataService.getNotices().subscribe(response => {
      this.notices = response;
    });
  }

  ngOnInit() {
  }

  menu = [
    {name : 'Noticeboard', key: 'noticeboard'},
    {name : 'Inquiries', key: 'inquiries'},
    {name : 'Attendence', key: 'attendence'}
  ];

  newInquiry(Inquiry){
    let response = this.dataService.newInquiry(Inquiry);
    if (response){
      this.success = true;
    }
  }
}
