import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchText: string = '';

  constructor() { }

  getSearchText(): string {
    return this.searchText;
  }

  setSearchText(searchText: string) {
    this.searchText = searchText;
  }
}
