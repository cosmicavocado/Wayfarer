import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities/cities'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  city: any;
  post: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Extract the city from the url
      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      })
      // Extract a single post
      this.post = this.city.posts.find((post: { id: number; }) => {
        let postId: string = params.get('postId') || '';
        return post.id === parseInt(postId);
      })
    })
  }

}
