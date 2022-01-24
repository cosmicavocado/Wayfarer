import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CITIES } from '../cities/cities';
import { SearchService } from '../services/search.service';

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

  constructor(private router: Router, private searchService: SearchService) { 
  }

  ngOnInit(): void {
  }

  searchPosts(searchText: string): void {
    if (searchText !== '') {
      this.searchText = searchText;
      this.searchService.setSearchText(searchText);
      console.log("Search component " + searchText);
      console.log("Search service " + this.searchService.getSearchText());
      this.router.navigateByUrl(`/search/${searchText}`);
    }
  }

}
