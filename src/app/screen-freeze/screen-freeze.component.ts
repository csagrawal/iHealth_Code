import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-freeze',
  templateUrl: './screen-freeze.component.html',
  // styleUrls: ['./screen-freeze.component.css']
  styles: [`
  div {
    background-color: #91ed8e;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `]
  
})
export class ScreenFreezeComponent implements OnInit {
  isTimerOn: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.startContinuousTimer();
  }

  startContinuousTimer() {
    setInterval(() => {
      if (this.isTimerOn) {
        this.isTimerOn = false;
        this.stopFreezeTimer(); //work
        setTimeout(() => {
          this.isTimerOn = true;
          this.startFreezeTimer();
        }, 5000);
      } else {
        this.isTimerOn = true;
        this.startFreezeTimer();//exercise
        setTimeout(() => {
          this.isTimerOn = false;
          this.stopFreezeTimer();
        }, 2000);
      }
    }, 7000);
  }

  startFreezeTimer() {
    // Logic to start the freeze timer
    console.log('Starting freeze timer');
  }

  stopFreezeTimer() {
    // Logic to stop the freeze timer
    console.log('Stopping freeze timer');
  }
}
