import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  minutes: number = 25;
  seconds: number = 0;
  isWorkPhase: boolean = true;

  startTimer() {
    console.log("Starting timer...");
    this.isWorkPhase = true;
  }

  pauseTimer() {
    console.log("Pausing timer...");
    this.isWorkPhase = false;
  }

  resetTimer() {
    console.log("Resetting timer...");
    this.minutes = 25;
    this.seconds = 0;
    this.isWorkPhase = true;
  }
}
