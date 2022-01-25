import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CITIES } from './cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  city: any;
  posts: any;
  weather: any;
  key: string = 'ea0ac3979e7ffe0003ba30e895aea3b5';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      // get city
      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      })
      // get posts array
      this.posts = this.city.posts || [];
      // sort posts by date
      this.posts = this.posts.sort((a: any, b: any) => {
        a = a.date.split('/').reverse().join('');
        b = b.date.split('/').reverse().join('');
        return b.localeCompare(a);
      })
      this.weather = this.getWeather(this.city.name);
    })
  }

    getWeather(name: string) {
    this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${this.key}&&units=metric`)
    .subscribe((response: any) => this.weather = response);
  }
}
