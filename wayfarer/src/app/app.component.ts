import { Component } from '@angular/core';
import { CITIES } from './cities/cities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wayfarer';
  cities = CITIES
}
