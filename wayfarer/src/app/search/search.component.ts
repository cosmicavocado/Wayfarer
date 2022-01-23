import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities/cities'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchPosts(searchText: string): void {


    if (searchText !== '') {
      // get searchText
      let searchExp = new RegExp(searchText, 'i');
      // search cities
      CITIES.forEach(city => {
        city.posts.forEach(post => {
          let matchTitle = post.title.match(searchExp);
          let matchPost = post.body.match(searchExp);

          // Log results
          if (matchTitle !== null || matchPost !== null) {
            console.log(matchTitle);
            console.log(matchPost);
          }
        })
      })
      
    }
    
  }

}
