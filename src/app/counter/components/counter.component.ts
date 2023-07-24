import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy( flag: boolean = true): void {
    this.counter += flag ? 1 : -1;
  }

  reset(): void {
    this.counter = 0;
  }
}
