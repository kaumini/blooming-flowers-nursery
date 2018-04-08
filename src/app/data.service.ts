import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private http : Http) {
   }

  getStudentData(studentId){
    let studentdata;
    let data = {'studentId' : studentId};
    return this.http.post("http://localhost:3000/api/getStudentData",data).map(response => {
      return response.json().data;
    });
  }
}
