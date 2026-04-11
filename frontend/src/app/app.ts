import { Component, signal } from '@angular/core';
import { Filters } from './components/filters/filters';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Filters],
})
export class App {
  protected readonly title = signal('frontend');
}
