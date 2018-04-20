import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getStudentData(studentId) {
    let studentdata;
    let data = { 'studentId': studentId };
    return this.http.post("http://localhost:3000/api/getStudentData", data).map(response => {
      return response.json().data;
    });
  }

  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData)
      .map(() => { return true; });
  }

  getNotices(){
    return this.http.get("http://localhost:3000/api/getNotices").map(response => {
      console.log(response.json().data);
      return response.json().data;
    });
  }

  newInquiry(Inquiry){
    console.log(Inquiry);
    return this.http.post("http://localhost:3000/api/newInquiry",Inquiry).subscribe(response => {
      return response.json();
    });
  }
}
