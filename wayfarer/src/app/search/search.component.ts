import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CITIES } from '../cities/cities'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() searchText: string = '';
  matches: any = [];
  cityIds: any = [];

  @Input() getMatches() {
    return this.matches;
  }
  @Input() getCityIds() {
    return this.cityIds;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchPosts(searchText: string): void {
    this.searchText = searchText;
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
      this.router.navigateByUrl('/search');
    }
  }

}
