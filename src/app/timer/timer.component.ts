import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnDestroy {
  minutes: number = 25;
  seconds: number = 0;
  isWorkPhase: boolean = true;

  private timerSubscription?: Subscription;
  private isRunning = false;

  ngOninit() {
    this.resetTimer();
  }

  startTimer() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          this.switchPhase();
        }
        else {
          this.minutes--;
          this.seconds = 59;
        }
      }
      else {
        this.seconds--;
      }
    });
  }

  pauseTimer() {
    this.timerSubscription?.unsubscribe();
    this.isRunning = false;
  }

  resetTimer() {
    this.pauseTimer();
    this.isWorkPhase = true;
    this.minutes = 25;
    this.seconds = 0;
    this.isRunning = false;
  }

  switchPhase() {
    this.pauseTimer();
    this.isWorkPhase = !this.isWorkPhase;
    this.minutes = this.isWorkPhase ? 25: 5;

    this.seconds = 0;
    this.startTimer();
  }

  ngOnDestroy()  {
    this.pauseTimer();
  }
}
