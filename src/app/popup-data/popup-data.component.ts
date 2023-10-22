import { Component, OnInit } from '@angular/core';
import { BackendDataService } from '../services/backend-data.service';

@Component({
  selector: 'app-popup-data',
  templateUrl: './popup-data.component.html',
  styleUrls: ['./popup-data.component.css']
})
export class PopupDataComponent implements OnInit {
  data: any;

  constructor(private dataService: BackendDataService) { }

  ngOnInit(): void {
    this.getDataFromBackend();
  }

  getDataFromBackend() {
    this.dataService.fetchDataFromBackend().subscribe(
      (response) => {
        this.data = response;
        this.openPopup();
      },
      (error) => {
        console.log('Error fetching data from the backend', error);
      }
    );
  }

  openPopup() {
    console.log('Data received from the backend:', this.data);
  }
}
