import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from './cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  city: any;
  posts: any;

  constructor(private route: ActivatedRoute) { }

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
    })
  }

}
