import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CITIES } from '../cities/cities';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  matches: any = [];
  cityIds: any = [];
  searchText: string = '';

  constructor(private router: Router, private searchService: SearchService) {
    this.searchText = searchService.getSearchText();
    console.log("Search results " + this.searchText);
    this.searchPosts(this.searchText);
   }

  ngOnInit(): void {
    // this.searchText = this.searchService.getSearchText();
    // console.log("Search results " + this.searchText);
    // this.searchPosts(this.searchText);
  }

  searchPosts(searchText: string): void {
    this.searchService.setSearchText(searchText);
    console.log("Search component " + searchText);
    // reset matches
    this.matches = [];

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
    this.searchText = '';
    // this.window.reload();
    // this.router.navigate([this.router.url])
  }

}
