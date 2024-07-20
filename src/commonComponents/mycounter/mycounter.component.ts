import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mycounter',
  standalone: true,
  imports: [],
  templateUrl: './mycounter.component.html',
  styleUrl: './mycounter.component.css'
})
export class MycounterComponent {
  @Input() end: number = 1000;  // Default end value
  @Input() duration: number = 2; // Default duration in seconds
  @Input() isVisible: boolean = false; // Flag to trigger count-up

  currentValue: number = 0;
  private startTime: number = 0;

  ngOnInit(): void {
    if (this.isVisible) {
      this.startCountUp();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isVisible'] && this.isVisible) {
      this.startCountUp();
    }
  }

  private startCountUp(): void {
    this.startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = (Date.now() - this.startTime) / 1000;
      const progress = Math.min(elapsedTime / this.duration, 1);
      this.currentValue = Math.floor(this.end * progress);

      if (progress === 1) {
        clearInterval(interval);
      }
    }, 100);
  }
}