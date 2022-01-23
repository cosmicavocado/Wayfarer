import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities/cities'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  matches: any = [];
  cityIds: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  searchPosts(searchText: string): void {
    // reset matches
    this.matches = [];
    // prevent empty string search
    if (searchText !== '') {
      // convert searchText to regex
      let searchExp = new RegExp(searchText, 'i');
      // search cities and posts for matching search text
      CITIES.forEach(city => {
        city.posts.forEach(post => {
          let matchTitle = post.title.match(searchExp);
          let matchPost = post.body.match(searchExp);
          // Push results
          if (matchTitle !== null || matchPost !== null) {
            this.cityIds.push(city.id);
            this.matches.push(post);
          }
        })
      })
    }
  }

}
