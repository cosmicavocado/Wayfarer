import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-search-results',
  template: `<app-search [searchText]="searchText"></app-search>`,
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  matches: any = [];
  cityIds: any = [];
  searchText: string = '';
  // @Input() getMatches() {
  //   return this.matches;
  // }
  // @Input() getCityIds() {
  //   return this.cityIds;
  // }

  constructor(private search: SearchComponent) { }

  ngOnInit(): void {
    this.search.searchPosts(this.searchText);
    console.log(this.matches);
    console.log(this.cityIds);
  }

}
