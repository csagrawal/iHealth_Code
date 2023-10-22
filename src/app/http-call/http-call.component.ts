import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css']
})
export class HttpCallComponent {
  apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getApiData();
  }

  getApiData() {
    this.http.get(this.apiUrl).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  }
}
