import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { CITIES } from '../cities/cities';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  matches: any = [];
  cityIds: any = [];
  searchText: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // listen for change in url
    this.route.paramMap.subscribe(params => {
      this.searchText = params.get('searchText') || '';
      return this.searchPosts(this.searchText);
    })
  }

  searchPosts(searchText: string): void {
    // reset results
    this.matches = [];
    this.cityIds = [];

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
    this.router.navigateByUrl(`/search/${searchText}`);
  }

}
